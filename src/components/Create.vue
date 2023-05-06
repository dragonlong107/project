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
                        <div class="grid-content "><router-link to="/question_bank"><i
                                    class="el-icon-close"></i></router-link></div>
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
                <el-col :span="18" style=" display: flex;flex-direction: column;justify-content:space-around;">
                    <div class="grid-content ">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="题库名称：" prop="name">
                                <el-input v-model="ruleForm.name"
                                    style="width: 800px;display: flex;flex-direction: row;justify-content: start;"
                                    maxlength="30" show-word-limit></el-input>
                            </el-form-item>
                            <el-form-item label="题目类型：" prop="resource">
                                <el-radio-group v-model="ruleForm.resource"
                                    style="display: flex;flex-direction: row;justify-content: start;">
                                    <el-radio label="单选题"
                                        style="margin-top: 5px; display: flex;flex-direction: row;justify-content: start;"></el-radio>
                                    <el-radio label="多选题"
                                        style="margin-top: 5px; display: flex;flex-direction: row;justify-content: start;"></el-radio>
                                    <el-radio label="判断题"
                                        style="margin-top: 5px; display: flex;flex-direction: row;justify-content: start;"></el-radio>
                                    <el-radio label="问答题"
                                        style="margin-top: 5px; display: flex;flex-direction: row;justify-content: start;"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <el-form-item style="display: flex;flex-direction: row;justify-content: end;">
                                <el-button type="primary" @click="submitForm('ruleForm')"><router-link to="/single_choose" style="text-decoration: none;color:white;">立即创建</router-link></el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content"></div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'Create',
    data() {
        return {
            input: '',
            textarea: '',
            radio: '1',
            ruleForm: {
                name: '',     
                resource: '',

            },
            rules: {
                name: [
                    { required: true, message: '请输入题库名称', trigger: 'blur' },
                    { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
                ],
                resource: [
                    { required: true, message: '请选择题库类型', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
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
}</style>