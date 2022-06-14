import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import dayjs from "dayjs";
import data1 from "../assets/GWData/2k.json";
import data2 from "../assets/GWData/8w.json";
import data3 from "../assets/GWData/my.json";
import data4 from "../assets/GWData/300.json";
import data5 from "../assets/GWData/5500.json";
import data6 from "../assets/GWData/myguild.json";
import data7 from "../assets/GWData/myguild2.json";
import data8 from "../assets/GWData/userList.json";
import data9 from "../assets/GWData/guildList.json";

export const useGuildWarsStore = defineStore("guildWars", {
    state: () => {
        return {
            currentTabName: "userRank",
            startTime: dayjs().month(3).date(27).hour(6).minute(0).second(0).millisecond(0),
            endTime: dayjs().month(3).date(27).hour(23).minute(0).second(0).millisecond(0),
            currentUserLine: "8万位",
            userLineOptions: [
                { value: 2000, label: "2千位" },
                { value: 80000, label: "8万位" },
                { value: 140000, label: "14万位" },
                { value: 180000, label: "18万位" },
            ],
            currentGuildLine: "5500位",
            guildLineOptions: [
                { value: 300, label: "300位" },
                { value: 5500, label: "5500位" },
                { value: 140000, label: "14万位" },
                { value: 180000, label: "18万位" },
            ],
            userid: useStorage("userid", ""),
            userLineRawData: [],
            userLineDatasets: [],
            guildid: useStorage("guildid", ""),
            guildLineRawData: [],
            guildLineDatasets: [],
            data: {
                300: data4,
                5500: data5,
                2000: data1,
                80000: data2,
            },
            userRawData: [],
            userLineTableData: [],
            guildRawData: [],
            guildLineTableData: [],
            msg: { user: "", guild: "", battle: "" },
            guildId1: useStorage("guildId1", ""),
            guildId2: useStorage("guildId2", ""),
            battleDatasets: [],
            battleTableData: [],
            searchId: "",
            searchName: "",
            searchType: "user",
            searchTableData: [],
            searchTableDataType: "",
        };
    },
    getters: {
        labels: state => {
            const arr = [state.startTime];
            while (arr.length < 52) {
                const current = arr[arr.length - 1].add(20, "m");
                arr.push(current);
            }
            return arr;
        },
    },
    actions: {
        handleUserLineChange() {
            const option = this.userLineOptions.find(option => option.label === this.currentUserLine);
            this.userLineRawData = this.data[option.value];
            this.userLineDatasets[0] = {
                label: this.currentUserLine,
                data: this.handleRawData(this.userLineRawData),
                borderColor: "#409EFF",
                spanGaps: true,
                tension: 0.1,
            };

            const forcastData = this.handleRawData(this.userLineRawData.slice(-1)).slice();
            forcastData[51] = this.getForcastLastData(this.userLineRawData);

            this.userLineDatasets[1] = {
                label: "个线预测",
                data: forcastData,
                borderColor: "#d9ecff",
                spanGaps: true,
                tension: 0.1,
            };
            this.getTableData(this.userLineTableData, "user", this.userRawData, this.userLineRawData);
        },
        handleGuildLineChange() {
            const option = this.guildLineOptions.find(option => option.label === this.currentGuildLine);
            this.guildLineRawData = this.data[option.value];
            this.guildLineDatasets[0] = {
                label: this.currentGuildLine,
                data: this.handleRawData(this.guildLineRawData),
                borderColor: "#409EFF",
                spanGaps: true,
                tension: 0.1,
            };

            const forcastData = this.handleRawData(this.guildLineRawData.slice(-1)).slice();
            forcastData[51] = this.getForcastLastData(this.guildLineRawData);

            this.guildLineDatasets[1] = {
                label: "团线预测",
                data: forcastData,
                borderColor: "#d9ecff",
                spanGaps: true,
                tension: 0.1,
            };
            this.getTableData(this.guildLineTableData, "guild", this.guildRawData, this.guildLineRawData);
        },
        handleBattleStart() {
            if (this.guildId1 == "" || this.guildId2 == "") return;
            const data1 = this.handleRawData(data6);
            const data2 = this.handleRawData(data7);
            this.battleDatasets[0] = {
                label: this.guildId1,
                data: data1.map(data => (data == null ? null : data - data1[0])),
                borderColor: "#409EFF",
                spanGaps: true,
                tension: 0.1,
            };

            const forcastData1 = this.handleRawData(data6.slice(-1)).slice();
            forcastData1[51] = this.getForcastLastData(data6);

            this.battleDatasets[1] = {
                label: "预测",
                data: forcastData1.map(data => (data == null ? null : data - data1[0])),
                borderColor: "#d9ecff",
                spanGaps: true,
                tension: 0.1,
            };

            this.battleDatasets[2] = {
                label: this.guildId2,
                data: data2.map(data => (data == null ? null : data - data2[0])),
                borderColor: "#F56C6C",
                spanGaps: true,
                tension: 0.1,
            };

            const forcastData2 = this.handleRawData(data7.slice(-1)).slice();
            forcastData2[51] = this.getForcastLastData(data7);

            this.battleDatasets[3] = {
                label: "预测",
                data: forcastData2.map(data => (data == null ? null : data - data2[0])),
                borderColor: "#fde2e2",
                spanGaps: true,
                tension: 0.1,
            };
            this.getBattleTableData(this.battleTableData, "battle", data6, data7);
        },
        handleRawData(rawData) {
            const arr = Array(52).fill(null);
            for (const item of rawData) {
                const index = dayjs.unix(item.updatetime).diff(this.startTime, "minute") / 20;
                arr[index] = item.point;
            }
            return arr;
        },
        getForcastLastData(rawData) {
            if (rawData.length >= 2) {
                const a = dayjs.unix(rawData[rawData.length - 1].updatetime);
                const b = dayjs.unix(rawData[rawData.length - 2].updatetime);
                const diffMinutes = a.diff(b, "m") / 20;
                const diffPoint = rawData[rawData.length - 1].point - rawData[rawData.length - 2].point;
                const currentLastIndex =
                    dayjs.unix(rawData[rawData.length - 1].updatetime).diff(this.startTime, "minute") / 20;
                const addPoint = (51 - currentLastIndex) * (diffPoint / diffMinutes);
                return addPoint + parseInt(rawData[rawData.length - 1].point);
            }
            return null;
        },
        addUserData() {
            this.userRawData = data3;
            this.userLineDatasets[2] = {
                label: "username",
                data: this.handleRawData(this.userRawData),
                borderColor: "#F56C6C",
                spanGaps: true,
                tension: 0.1,
            };

            const forcastData = this.handleRawData(this.userRawData.slice(-1)).slice();
            forcastData[51] = this.getForcastLastData(this.userRawData);

            this.userLineDatasets[3] = {
                label: "玩家预测",
                data: forcastData,
                borderColor: "#fde2e2",
                spanGaps: true,
                tension: 0.1,
            };
            this.getTableData(this.userLineTableData, "user", this.userRawData, this.userLineRawData);
        },
        addGuildData() {
            this.guildRawData = data6;
            this.guildLineDatasets[2] = {
                label: "maguna",
                data: this.handleRawData(this.guildRawData),
                borderColor: "#F56C6C",
                spanGaps: true,
                tension: 0.1,
            };

            const forcastData = this.handleRawData(this.guildRawData.slice(-1)).slice();
            forcastData[51] = this.getForcastLastData(this.guildRawData);

            this.guildLineDatasets[3] = {
                label: "玩家预测",
                data: forcastData,
                borderColor: "#fde2e2",
                spanGaps: true,
                tension: 0.1,
            };
            this.getTableData(this.guildLineTableData, "guild", this.guildRawData, this.guildLineRawData);
        },
        getSpeedData(rawData) {
            if (rawData.length == 0) return [];
            const arr = rawData.map(item => ({ ...item }));

            for (let i = 1; i < rawData.length; i++) {
                const diffPoint = rawData[i].point - rawData[i - 1].point;
                const diffMinutes =
                    dayjs.unix(rawData[i].updatetime).diff(dayjs.unix(rawData[i - 1].updatetime), "minute") / 20;
                arr[i].point = parseInt(((diffPoint / diffMinutes) * 3) / 10000);
            }
            arr[0].point = null;
            return arr;
        },
        getTableData(tableData, msgTarget, rawData, LineRawData) {
            try {
                tableData.length = 0;
                let msg = "";
                const userPointArr = this.handleRawData(rawData);
                const linePointArr = this.handleRawData(LineRawData);
                const userSpeedArr = this.handleRawData(this.getSpeedData(rawData));
                const lineSpeedArr = this.handleRawData(this.getSpeedData(LineRawData));

                for (let i = 0; i < this.labels.length; i++) {
                    if (linePointArr[i] !== null) {
                        tableData.push({
                            label: this.labels[i].format("HH:mm"),
                            userPoint: userPointArr[i] !== null ? (userPointArr[i] / 100000000).toFixed(2) : "-",
                            linePoint: linePointArr[i] !== null ? (linePointArr[i] / 100000000).toFixed(2) : "-",
                            userSpeed: userSpeedArr[i] !== null ? userSpeedArr[i] : "-",
                            lineSpeed: lineSpeedArr[i] !== null ? lineSpeedArr[i] : "-",
                            diffPoint:
                                userPointArr[i] !== null ? parseInt((userPointArr[i] - linePointArr[i]) / 10000) : "-",
                        });
                    }
                }

                if (dayjs.unix(LineRawData[LineRawData.length - 1].updatetime).format("HH:mm") === "23:00") {
                    tableData.reverse();
                    this.msg[msgTarget] = msg;
                    return;
                }

                if (rawData.length == 0) {
                    const lastData = LineRawData[LineRawData.length - 1];
                    const index = dayjs.unix(lastData.updatetime).diff(this.startTime, "minute") / 20;
                    const lastPoint = (
                        parseFloat(tableData[index].linePoint) +
                        (tableData[index].lineSpeed *
                            this.endTime.diff(dayjs.unix(lastData.updatetime), "hour", true)) /
                            10000
                    ).toFixed(2);
                    msg = `以当前速度,到今天23点线将达到${lastPoint}亿贡献`;
                } else {
                    const lastData = rawData[rawData.length - 1];
                    const index = dayjs.unix(lastData.updatetime).diff(this.startTime, "minute") / 20;
                    const { diffPoint, userSpeed, lineSpeed } = tableData[index];

                    if (diffPoint > 0 && userSpeed >= lineSpeed) {
                        msg = "目前在线内，而且速度比线快，稳住！";
                    }
                    8;
                    if (diffPoint < 0 && userSpeed <= lineSpeed) {
                        msg = "目前在线外，而且速度没线快，别睡了！";
                    }
                    if (diffPoint > 0 && userSpeed < lineSpeed) {
                        msg = `目前在线内，但速度没线快，以当前速度${(diffPoint / (lineSpeed - userSpeed)).toFixed(
                            2
                        )}小时后掉出去，快冲啊！`;
                    }
                    if (diffPoint < 0 && userSpeed > lineSpeed) {
                        msg = `目前在线外，但比线速度快，以当前速度${(-diffPoint / (userSpeed - lineSpeed)).toFixed(
                            2
                        )}小时后进线，冲冲冲！`;
                    }
                    if (diffPoint == 0) {
                        msg = "持平了！冲啊！！！";
                    }
                }
                tableData.reverse();
                this.msg[msgTarget] = msg;
            } catch (error) {
                console.log(error);
            }
        },
        getBattleTableData(tableData, msgTarget, guildRawData1, guildRawData2) {
            try {
                tableData.length = 0;
                let msg = "";
                const guildPointArr1 = this.handleRawData(guildRawData1).map(data =>
                    data == null ? null : data - this.handleRawData(guildRawData1)[0]
                );
                const guildPointArr2 = this.handleRawData(guildRawData2).map(data =>
                    data == null ? null : data - this.handleRawData(guildRawData2)[0]
                );
                const guildSpeedArr1 = this.handleRawData(this.getSpeedData(guildRawData1));
                const guildSpeedArr2 = this.handleRawData(this.getSpeedData(guildRawData2));

                for (let i = 0; i < this.labels.length; i++) {
                    if (guildPointArr1[i] !== null && guildPointArr2[i] !== null) {
                        tableData.push({
                            label: this.labels[i].format("HH:mm"),
                            guildPoint1: guildPointArr1[i] !== null ? (guildPointArr1[i] / 100000000).toFixed(2) : "-",
                            guildPoint2: guildPointArr2[i] !== null ? (guildPointArr2[i] / 100000000).toFixed(2) : "-",
                            guildSpeed1: guildSpeedArr1[i] !== null ? (guildSpeedArr1[i] / 10000).toFixed(2) : "-",
                            guildSpeed2: guildSpeedArr2[i] !== null ? (guildSpeedArr2[i] / 10000).toFixed(2) : "-",
                            diffPoint: ((guildPointArr1[i] - guildPointArr2[i]) / 100000000).toFixed(2),
                        });
                    }
                }

                if (dayjs().isAfter(this.endTime)) {
                    tableData.reverse();
                    this.msg[msgTarget] = "已经不用再战斗了";
                    return;
                }

                const lastData1 = guildRawData1[guildRawData1.length - 1];
                const lastData2 = guildRawData2[guildRawData2.length - 1];
                const index1 = dayjs.unix(lastData1.updatetime).diff(this.startTime, "minute") / 20;
                const index2 = dayjs.unix(lastData2.updatetime).diff(this.startTime, "minute") / 20;

                if (index1 !== index2) {
                    tableData.reverse();
                    this.msg[msgTarget] = "数据缺失";
                    return;
                }
                const { diffPoint, guildSpeed1, guildSpeed2 } = tableData[index1];

                if (diffPoint > 0 && guildSpeed1 - guildSpeed2 >= 0) {
                    msg = "目前领先，而且速度比对方快，稳住！";
                }

                if (diffPoint < 0 && guildSpeed1 - guildSpeed2 <= 0) {
                    msg = "目前落后，而且速度没对方快，别睡了！";
                }
                if (diffPoint > 0 && guildSpeed1 - guildSpeed2 < 0) {
                    msg = `目前领先，但速度没对方快，以当前速度${(diffPoint / (guildSpeed2 - guildSpeed1)).toFixed(
                        2
                    )}小时后被反超，快冲啊！`;
                }
                if (diffPoint < 0 && guildSpeed1 - guildSpeed2 > 0) {
                    msg = `目前落后，但速度比对方快，以当前速度${(-diffPoint / (guildSpeed1 - guildSpeed2)).toFixed(
                        2
                    )}小时后反超，冲冲冲！`;
                }
                if (diffPoint == 0) {
                    msg = "持平了！冲啊！！！";
                }
                tableData.reverse();
                this.msg[msgTarget] = msg;
            } catch (error) {
                console.log(error);
            }
        },
        handleSearch() {
            // this.searchId;
            // this.searchName;
            // this.searchType;
            // console.log();
            if (this.searchType == "user") {
                this.searchTableData = data8;
                this.searchTableDataType = "user";
            }
            if (this.searchType == "guild") {
                this.searchTableData = data9;
                this.searchTableDataType = "guild";
            }
        },
    },
});
