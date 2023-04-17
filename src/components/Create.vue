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
                        <div class="grid-content "><i class="el-icon-close"></i></div>
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
            <el-row :gutter="20">
                <el-col :span="3">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="18">
                    <el-col :span="4">
                        <div class="grid-content "><i class="el-icon-star-on"></i>题库名称:</div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content "><el-input placeholder="请输入内容" v-model="input" clearable>
                            </el-input></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content b">0/30</div>
                    </el-col>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content "></div>
                </el-col>
            </el-row>
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
                                <el-button>取消</el-button>

                            </el-col>
                            <el-col :span="12">
                                <el-button type="primary">确定</el-button>
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
            input: ''
        }
    }
}
</script>

<style>
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
    line-height: 160px;
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