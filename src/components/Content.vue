<template>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content ">
                        <div style="font-size: 28px;color:#1E90FF;">题库管理</div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="4"><el-button type="primary">试题标签管理</el-button></el-col>
                <el-col :span="4"><el-button type="success"><router-link to="/Create">创 建 题
                            库</router-link></el-button></el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="8">
                    <el-row>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                            <div class="grid-content"
                                style="font-size:18px;display: flex;flex-direction: column;justify-content: center;">题库名称：
                            </div>
                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                            <el-input v-model="input" placeholder=""></el-input>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content "></div>
                        </el-col>
                    </el-row>

                </el-col>
                <el-col :span="8">
                    <el-row>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content "></div>
                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                            <div class="grid-content"
                                style="font-size:18px;display: flex;flex-direction: column;justify-content: center;">创建人：
                            </div>
                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                            <el-input v-model="input" placeholder="请输入创建人"></el-input>
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="grid-content "></div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8">
                    <el-radio v-model="radio" label="1">只看我创建的</el-radio>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">重置</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content  "></div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-col :span="12">
                        <i class="el-icon-refresh-right"></i>
                        刷新
                    </el-col>
                    <el-col :span="12">
                        <i class="el-icon-setting"></i>
                        列设置
                    </el-col>
                </el-col>
            </el-row>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="question_bank_name" label="题库名称" width="150">
                </el-table-column>
                <el-table-column prop="total" label="题量" width="120">
                </el-table-column>
                <el-table-column prop="single_choose" label="单选" width="120">
                </el-table-column>
                <el-table-column prop="multiple_choose" label="多选" width="120">
                </el-table-column>
                <el-table-column prop="judgment" label="判断" width="120">
                </el-table-column>
                <el-table-column prop="fill" label="填空" width="120">
                </el-table-column>
                <el-table-column prop="Q_A_person" label="问答(人工判分)" width="120">
                </el-table-column>
                <el-table-column prop="Q_A_system" label="问答(系统判分)" width="120">
                </el-table-column>
                <el-table-column prop="name" label="创建人" width="120">
                </el-table-column>
                <el-table-column prop="update_date" label="跟新时间" width="120">
                </el-table-column>
                <el-table-column prop="create_date" label="创建时间" width="120">
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
        </el-main>
    </el-container>
</template>

<script>
export default {
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },
    name: 'Content',
    data() {
        return {
            input: '',
            radio: '0',
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
    }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;

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
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>