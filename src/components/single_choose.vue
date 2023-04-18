<template>
    <!-- <el-row :gutter="10">
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
    </el-table> -->
</template>

<script>
export default {
    name: 'single_choose'
}
</script>

<style></style>
