<template>
    <el-row>
        <el-col :span="1">
            <div class="grid-content "></div>
        </el-col>
        <el-col :span="22">
            <el-container>
                <el-header>
                    <el-row>
                        <el-col :span="2">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="2">
                            <div class="grid-content " style="font-size: 26px;font-weight: bold;color: #1E90FF;">题库管理
                            </div>
                        </el-col>
                        <el-col :span="15">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content ">
                                <el-button style="font-weight:bold;">试题标签管理</el-button>
                                <el-button type="primary"><router-link to="/Create" style="font-weight:bold; color:white;text-decoration: none;">创建题库</router-link></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main >
                    <el-row >
                        <el-col :span="6" >
                            <el-row style="display: flex;flex-direction:row;justify-content: center;align-items: center;">
                                <el-col :span="6">
                                    题库名称:
                                </el-col>
                                <el-col :span="18">
                                    <div class="grid-content ">
                                        <el-input placeholder="" v-model="input" clearable>
                                        </el-input>
                                    </div>
                                </el-col>
                            </el-row>

                        </el-col>
                        <el-col :span="6">
                            <el-row style="display: flex;flex-direction:row;justify-content: center;align-items: center;">
                                <el-col :span="6">
                                    创建人:
                                </el-col>
                                <el-col :span="18">
                                    <div class="grid-content ">
                                        <el-input placeholder="请输入创建人" v-model="input" clearable>
                                        </el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <el-row >
                                <el-col :span="12">
                                    <div class="grid-content " >
                                        <el-checkbox v-model="checked" style="display: flex;flex-direction:row;justify-content: center;align-items: center;">只看我创建的</el-checkbox>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ">
                                        <el-button type="primary">查询</el-button>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content ">
                                        <el-button plain>重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content "></div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content ">
                                <el-row>
                                    <el-col :span="12">
                                        <div class="grid-content ">
                                            <router-link to="/question_bank" style="color:#1E90FF;text-decoration: none;"><i
                                                    class="el-icon-refresh-right"></i>刷新</router-link>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content ">
                                            <router-link to="/Create" style="color:#1E90FF;text-decoration: none;"><i
                                                    class="el-icon-setting"></i>列设置</router-link>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>

                </el-main>
                <el-table fixed ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column fixed prop="question_bank_name" label="题库名称" width="100">
                    </el-table-column>
                    <el-table-column prop="total" label="题量" width="100">
                    </el-table-column>
                    <el-table-column prop="single_choose" label="单选" width="100">
                    </el-table-column>
                    <el-table-column prop="multiple_choose" label="多选" width="100">
                    </el-table-column>
                    <el-table-column prop="judgment" label="判断" width="100">
                    </el-table-column>
                    <el-table-column prop="fill" label="填空" width="100">
                    </el-table-column>
                    <el-table-column prop="Q_A_person" label="问答(人工判分)" width="100">
                    </el-table-column>
                    <el-table-column prop="Q_A_system" label="问答(系统判分)" width="100">
                    </el-table-column>
                    <el-table-column prop="name" label="创建人" width="120">
                    </el-table-column>
                    <el-table-column prop="update_date" label="跟新时间" width="120">
                    </el-table-column>
                    <el-table-column prop="create_date" label="创建时间" width="120" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="190">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">试题</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small">删除</el-button>
                            <el-button type="text" size="small">变更创建人</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-container>
        </el-col>
        <el-col :span="1">
            <div class="grid-content "></div>
        </el-col>
    </el-row>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    nname: "question_bank",
    data() {
        return {
            input: '',
            checked: false,
            checkAll: false,
            tableData: [{
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }, {
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }, {
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }, {
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }, {
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }, {
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }, {
                question_bank_name: 'lstk',
                total: '0',
                single_choose: '0',
                multiple_choose: '0',
                judgment: '0',
                fill: '0',
                Q_A_person: '0',
                Q_A_system: '0',
                name: '张雁',
                update_date: '2023-04-17',
                create_date: '2023-04-17',
            }]
        }
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },

    components: { RouterLink }
}
</script>

<style scoped>
 .el-row {
     /* margin-bottom: 20px; */
     /* 会报错，但是问题不大 */
     /* &:last-child {
         margin-bottom: 0;
     } */
 }

 .el-col {
    border-radius: 4px;
 }

 .bg-purple-dark {
     background: #99a9bf;
 }

 .bg-purple {
     background: #d3dce6;
 }

 .bg-purple-light {
     background: #e5e9f2;
 }

 .grid-content {
     border-radius: 4px;
     min-height: 40px;
 }

 .row-bg {
     padding: 10px 0;
     background-color: #f9fafc;
 }

 .el-header,
 .el-footer {
     /* background-color: #B3C0D1; */
     color: #333;
     text-align: center;
     line-height: 60px;
 }

 .el-aside {
     background-color: #D3DCE6;
     color: #333;
     text-align: center;
     line-height: 200px;
 }

 .el-main {
     /* background-color: #E9EEF3; */
     color: #333;
     text-align: center;
     /* line-height: 40px; */
 }

 body>.el-container {
     margin-bottom: 40px;
 }

 .el-container:nth-child(5) .el-aside,
 .el-container:nth-child(6) .el-aside {
     line-height: 260px;
 }

 .el-container:nth-child(7) .el-aside {
     line-height: 320px;
 }</style>