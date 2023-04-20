<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="1">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content t">
                        <div class="grid-content " style="font-size:20px">题库设置</div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content ">
                        <div class="grid-content "><router-link to="/question_bank"><i class="el-icon-close"></i></router-link></div>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content "></div>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="20">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content "></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="18" style=" height: 200px;display: flex;flex-direction: column;justify-content:space-around;">
                    <div class="grid-content ">
                        <el-row>
                            <el-col :span="2">
                                <div class="grid-content "
                                    style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                    <i class="el-icon-star-on" style="color:#DC143C"></i>
                                    <div style="color:black">题库名称:</div>
                                </div>
                            </el-col>
                            <el-col :span="18">
                                <div class="grid-content ">
                                    <el-input type="textarea" :rows="1" placeholder=" " v-model="textarea" maxlength="30"
                                        show-word-limit size>
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="2">
                                <div class="grid-content "
                                    style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                    <i class="el-icon-star-on" style="color:#DC143C"></i>题库类型:
                                    <div></div>
                                </div>
                            </el-col>
                            <el-col :span="22">
                                <div class="grid-content "
                                    style="padding-left: 10px; padding-top: 3px; display: flex;flex-direction: row;justify-content: start;align-items: center;">
                                    <el-radio v-model="radio" label="1"
                                        style="display: flex;flex-direction: row;justify-content: start;align-items:center;">单选题</el-radio>
                                    <el-radio v-model="radio" label="2"
                                        style="display: flex;flex-direction: row;justify-content: start;align-items: center;">多选题</el-radio>
                                    <el-radio v-model="radio" label="3"
                                        style="display: flex;flex-direction: row;justify-content: start;align-items: center;">判断题</el-radio>
                                    <el-radio v-model="radio" label="4"
                                        style="display: flex;flex-direction: row;justify-content: start;align-items: center;">问答题</el-radio>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content"></div>
                </el-col>
            </el-row>

        </el-main>
        <el-footer>
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
                <el-col :span="6">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content ">
                        <div class="grid-content ">
                            <el-col :span="12">
                                <el-button><router-link to="/question_bank" style="text-decoration: none;color:black">取消</router-link></el-button>

                            </el-col>
                            <el-col :span="12">
                                <el-button type="primary"><router-link to="/single_choose"
                                        style="text-decoration: none; color:#ffffff;">确定</router-link></el-button>
                            </el-col>
                        </div>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content "></div>
                </el-col>


            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'Create',
    data() {
        return {
            input: '',
            textarea: '',
            radio: '1'
        }
    }
}
</script>

<style scoped>
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
    /* line-height: 160px; */
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
}

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
    min-height: 1px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>