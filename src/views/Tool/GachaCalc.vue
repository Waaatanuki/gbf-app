<template>
    <div class="container">
        <div>
            <el-card class="gacha-calc-card">
                <template #header>
                    <div class="card-header">
                        <span>攒井计算器</span>
                        <label> {{ parseInt(totalStone / 90000) + '井' }}{{ totalDraw % 300 + '抽'
                        }}</label>
                    </div>
                </template>
                <div class="card-body">
                    <el-form :model="form" label-width="70px">
                        <el-form-item v-for="(item, key) in form" :label="item.desc">
                            <el-input v-model.number.lazy="item.value" onfocus="this.select()" />
                        </el-form-item>
                    </el-form>
                    <el-divider />
                    <el-form label-width="70px">
                        <el-form-item label="点数价格">
                            <el-input v-model.number.lazy="price" onfocus="this.select()" />
                        </el-form-item>
                        <el-form-item label="对应点数">
                            <el-input v-model.number.lazy="point" onfocus="this.select()" />
                        </el-form-item>
                    </el-form>
                    <div style="text-align: center">
                        {{ '下一井需要补' + parseInt((price * (90000 - (totalStone % 90000))) / point) + '元' }}
                    </div>
                </div>
            </el-card>
        </div>
        <div style="width:100%">
            <el-card class="gacha-simulate-card">
                <template #header>
                    <div class="card-header">
                        <span>抽卡模拟</span>
                        <span>当前总抽数：{{ count }} , SSR个数：{{ ssrCount }} , SSR率：{{ (ssrCount / count * 100).toFixed(2)
                        }}%</span>
                        <div>
                            <el-button type="warning" @click="reset">重置</el-button>
                        </div>
                    </div>
                </template>
                <div class="card-body">
                    <div class="gacha-bg">
                        <div>
                            <el-image v-for="item in result.slice(0, 3)"
                                :src="`./img/gacha/${item.cat}/${item.id}.jpg`" />
                        </div>

                        <div>
                            <el-image v-for="item in result.slice(3, 7)"
                                :src="`./img/gacha/${item.cat}/${item.id}.jpg`" />
                        </div>
                        <div>
                            <el-image v-for="item in result.slice(7, 10)"
                                :src="`./img/gacha/${item.cat}/${item.id}.jpg`" />
                        </div>
                    </div>
                    <div class="btn-gacha-box">
                        <div class="btn-gacha" @click="draw(1)">
                            <img class="img-gacha-button" src="/img/gacha/text_legend10.png" alt="text_legend10">
                        </div>
                        <div class="btn-gacha" @click="draw(30)">
                            <img class="img-gacha-button" src="/img/gacha/text_legend300.png" alt="text_legend300">
                        </div>
                    </div>
                    <div class="show-ssr-box">
                        <el-scrollbar height="200px">
                            <el-image v-for="item in ssrList" :class="{ target: item.incidence == '1' }"
                                :src="`./img/gacha/${item.cat}/${item.id}.jpg`" />
                        </el-scrollbar>
                    </div>
                </div>
                <span class="tip">{{ gachaLineup }}</span>
            </el-card>
        </div>
    </div>
    <div class="animation" v-if="animationVisible" @click="closeAnimation">
        <GachaAnimation :resultList='animationResult' @close='closeAnimation' />
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import GachaAnimation from '../../components/Tool/Gacha/GachaAnimation.vue'
import gachaNormalRatio from '../../assets/gachaData/gachaNormalRatio.json'
import gachaSrRatio from '../../assets/gachaData/gachaSrRatio.json'
import gachaInfo from '../../assets/gachaData/gachaInfo.json'

const form = reactive({
    legendticket10: { desc: '10连券', value: 0 },
    legendticket: { desc: '单抽券', value: 0 },
    stone: { desc: '宝晶石', value: 0 },
    drawn: { desc: '已抽', value: 0 },
    mobacoin: { desc: '剩余点数', value: 0 },
})

const price = ref(160)
const point = ref(3000)

const animationVisible = ref(false)

const totalStone = computed(() =>
    form.legendticket10.value * 3000 +
    form.legendticket.value * 300 +
    form.stone.value +
    form.drawn.value * 300 +
    form.mobacoin.value
);

const totalDraw = computed(() =>
    parseInt(totalStone.value / 300)
)

let cardN = null;
let cardSR = null;
const cardType = ["weapon", "weapon", "summon"];
const rarityType = {
    2: "r",
    3: "sr",
    4: "ssr",
};
const result = ref([])
const ssrList = ref([])
const animationResult = ref([]);
const count = ref(0)
const ssrCount = ref(0)
const gachaLineup = "*当前卡池时间：" + gachaInfo.legend.lineup[0].service_start + '—' + gachaInfo.legend.lineup[0].service_end + ' 彩框为卡池UP'

const getRate = raw => {
    const data = raw.appear;
    const card = [];
    data.forEach(item => {
        const cat = cardType[item.category];
        const type = rarityType[item.rarity];
        item.item.forEach(obj => {
            card.push({
                id: obj.reward_id,
                rate: parseFloat(obj.drop_rate) / 100,
                cat: cat,
                type,
                incidence: obj.incidence
            });
        });
    });
    return card;
};

const gacha = type => {
    let card = cardN;
    if (type === "sr") card = cardSR;
    let len = card.length;
    let rateNum = 0;
    const pos = Math.floor(Math.random() * len);
    const pointer = Math.random();
    for (let i = pos; i < len; i++) {
        rateNum += card[i].rate;

        if (rateNum > pointer) {
            return card[i];
        }
    }

    for (let i = 0; i < pos; i++) {
        rateNum += card[i].rate;

        if (rateNum > pointer) {
            return card[i];
        }
    }

    let idx = pos;
    if (pos === 0) idx = len - 1;
    return card[idx];
};

const gacha10 = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        if (i === 9) {
            result.push(gacha("sr"));
        } else {
            result.push(gacha());
        }
    }
    return result;
};

const draw = (times) => {
    animationVisible.value = true
    animationResult.value.length = 0
    if (!cardN) cardN = getRate(gachaNormalRatio);
    if (!cardSR) cardSR = getRate(gachaSrRatio);
    for (let i = 0; i < times; i++) {
        result.value = gacha10();
        animationResult.value = animationResult.value.concat([...result.value])
        count.value += 10
        for (const item of result.value) {
            if (item.type === 'ssr') {
                ssrCount.value++
                ssrList.value.push(item);
            }
        }
    }
}

const reset = () => {
    result.value = []
    ssrList.value = []
    count.value = 0
    ssrCount.value = 0
}

function closeAnimation() {
    animationVisible.value = false;
    animationResult.value.length = 0
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
}

.gacha-calc-card {
    margin-right: 5px;
    height: 550px;
    width: 250px;



    .input-form {
        display: flex;
        justify-content: center;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.gacha-simulate-card {
    height: 550px;
    margin-right: 2px;
    position: relative;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 21px;


    }

    .card-body {
        display: flex;
        flex-direction: column;

        .btn-gacha-box {
            display: flex;
            justify-content: center;
            align-items: center;

            .btn-gacha {
                background: url(/img/gacha/parts_common.png) no-repeat 0 -232px;
                background-size: 320px 5559px;
                width: 148px;
                height: 65px;
                box-sizing: border-box;
                display: inline-block;
                text-align: center;
                position: relative;
                padding-top: 11px;

                img {
                    width: 112px;
                    height: 38px;
                }
            }

            .btn-gacha:active {
                background: url(/img/gacha/parts_common.png) no-repeat 0 -776px;
                background-size: 320px 5559px;
                transform: scale(0.9)
            }
        }

        .gacha-bg {
            height: 166px;
            padding-top: 4px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: url(/img/bg/gacha_result_bg.jpg) 50% 50% no-repeat;
        }

        .el-image {
            height: 50px;
            margin: 0px 2px;
        }

        .target {
            box-shadow: rgb(85, 91, 255) 0px 0px 0px 2px, rgb(31, 193, 27) 0px 0px 0px 4px, rgb(255, 217, 19) 0px 0px 0px 6px, rgb(255, 156, 85) 0px 0px 0px 8px, rgb(255, 85, 85) 0px 0px 0px 10px;
        }

        .show-ssr-box {
            margin-top: 10px;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 100%;

            .el-image {
                margin: 12px;

            }
        }
    }

    .tip {
        position: absolute;
        bottom: 1px;
        right: 1px;
        font-size: 13px;
    }
}
</style>