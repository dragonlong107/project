<template>
    <el-container>
        <el-header><el-row>
                <el-col :span="2">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content " style="font-size:26px; font-weight: bold; color:#1E90FF; ">试题录入</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content "></div>
                </el-col>
            </el-row></el-header>
        <el-main>
            <el-row>
                <el-col :span="1">
                    <div class="grid-content"></div>
                </el-col>
                <el-col :span="22">
                    <div class="grid-content ">
                        <el-row>
                            <el-col :span="10">
                                <div class="grid-content ">
                                    <el-radio-group v-model="radio">
                                        <el-radio label="3" v-model="radio" style="font-weight: bold;">单选题</el-radio>
                                        <el-radio label="6" v-model="radio" style="font-weight: bold;">多选题</el-radio>
                                        <el-radio label="9" v-model="radio" style="font-weight: bold;">判断题</el-radio>
                                        <el-radio label="12" v-model="radio" style="font-weight: bold;">填空题</el-radio>
                                        <el-radio label="15" v-model="radio" style="font-weight: bold;">问答题</el-radio>
                                    </el-radio-group>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="grid-content "></div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="bg-purple-dark" style="height: 1px;"></div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="2">
                                <div class="grid-content "></div>
                            </el-col>
                            <el-col :span="20">
                                <div class="grid-content">
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                                        class="demo-ruleForm">
                                        <el-form-item label="题干：" prop="Question_stem">
                                            <el-input v-model="ruleForm.Question_stem" type="textarea" :rows="6"
                                                maxlength="500" show-word-limit></el-input>
                                        </el-form-item>
                                        <!-- <el-form-item label="图片：" prop="pic"
                                            style="display: flex;flex-direction: row;justify-content: start;">
                                            <div class="grid-content ">
                                                <el-dialog :visible.sync="dialogVisible">
                                                    <img width="100%" :src="dialogImageUrl" alt="">
                                                </el-dialog>
                                                <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                                    <i slot="default" class="el-icon-plus"></i>
                                                    <div slot="file" slot-scope="{file}">
                                                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                                        <span class="el-upload-list__item-actions">
                                                            <span class="el-upload-list__item-preview"
                                                                @click="handlePictureCardPreview(file)">
                                                                <i class="el-icon-zoom-in"></i>
                                                            </span>
                                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                                @click="handleDownload(file)">
                                                                <i class="el-icon-download"></i>
                                                            </span>
                                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                                @click="handleRemove(file)">
                                                                <i class="el-icon-delete"></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </el-upload>
                                            </div>
                                        </el-form-item> -->
                                        <!-- <el-form-item label="" prop="prompt">
                                            <el-row>
                                                <el-col :span="24">
                                                    <div class="grid-content "
                                                        style="font-size: 14px;font-weight: bold; color:#c0c4cc;display: flex;justify-content: start;">
                                                        允许上传的图片格式为jpg、jpeg、gif、png，最多上传4张照片，大小限制5M以内</div>
                                                </el-col>
                                            </el-row>
                                        </el-form-item> -->
                                        
                                        <el-form-item label="正确答案：" prop="Correct_answer">
                                            <el-radio-group v-model="ruleForm.Correct_answer"
                                                style="display: flex;flex-direction:row;justify-content: start;">
                                                <el-radio label="正确"
                                                    style="margin-top: 5px; display: flex;flex-direction:row;justify-content: start;"></el-radio>
                                                <el-radio label="错误"
                                                    style="margin-top: 5px; display: flex;flex-direction:row;justify-content: start;"></el-radio>
                                                
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-form-item label="答案解析：" prop="Answer_analysis">
                                            <el-input v-model="ruleForm.Answer_analysis" type="textarea" :rows="6"
                                                maxlength="500" show-word-limit></el-input>
                                        </el-form-item>
                                        <!-- <el-form-item label="" prop="pic2"
                                            style="display: flex;flex-direction: row;justify-content: start;">
                                            <div class="grid-content ">
                                                <el-dialog :visible.sync="dialogVisible">
                                                    <img width="100%" :src="dialogImageUrl" alt="">
                                                </el-dialog>
                                                <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                                    <i slot="default" class="el-icon-plus"></i>
                                                    <div slot="file" slot-scope="{file}">
                                                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                                        <span class="el-upload-list__item-actions">
                                                            <span class="el-upload-list__item-preview"
                                                                @click="handlePictureCardPreview(file)">
                                                                <i class="el-icon-zoom-in"></i>
                                                            </span>
                                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                                @click="handleDownload(file)">
                                                                <i class="el-icon-download"></i>
                                                            </span>
                                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                                @click="handleRemove(file)">
                                                                <i class="el-icon-delete"></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </el-upload>
                                            </div>
                                        </el-form-item> -->
                                        <!-- <el-form-item label="" prop="prompt">
                                            <el-row>
                                                <el-col :span="24">
                                                    <div class="grid-content "
                                                        style="font-size: 14px;font-weight: bold; color:#c0c4cc;display: flex;justify-content: start;">
                                                        允许上传的图片格式为jpg、jpeg、gif、png，最多上传4张照片，大小限制5M以内</div>
                                                </el-col>
                                            </el-row>
                                        </el-form-item> -->
                                        <el-form-item label="备注：" prop="label">
                                            <el-col :span="8">
                                                <div class="grid-content ">
                                                    <el-input placeholder=" " v-model="ruleForm.label" clearable>
                                                    </el-input>
                                                </div>
                                            </el-col>
                                            <el-col :span="14">
                                                <div class=" grid-content "
                                                    style="padding-left: 20px;padding-top: 3px; display: flex;flex-direction: row; justify-content: start;">
                                                    <!-- <el-button size="medium" round
                                                        style=" color:#2191ff; margin-top: 3px; display: flex;flex-direction: row; justify-content: space-between;"><i
                                                            class="el-icon-plus"></i>
                                                        <div style="padding-top: 2px;">新增标签</div>
                                                    </el-button> -->
                                                </div>
                                            </el-col>
                                        </el-form-item>
                                        <br>
                                        <br>
                                        <br>
                                        <br>
                                        <br>
                                        <el-form-item style="display: flex;flex-direction: row;justify-content: end;">
                                            <el-button type="primary" @click="submitForm('ruleForm')">保存判断题</el-button>
                                            <el-button @click="resetForm('ruleForm')"><router-link to="/question_bank"
                                                    style="text-decoration: none;color: #1E90FF;">取消</router-link></el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content "></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content"></div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'insert_judgement',
    data() {
        return {
            input: '',
            text: '',
            textarea: '',
            textarea: '',
            radio: '9',
            radio1: 4,
            textarea2: '',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            ruleForm: {
                Question_stem: '',
                // pic: '',
                // option: '',
                Correct_answer: '',
                Answer_analysis: '',
                // pic2: '',
                label: ''
            },
            rules: {
                Question_stem: [
                    { required: true, message: '请输入题目', trigger: 'blur' },
                    { min: 1, max: 500, message: '长度在 1 到 500 个字符', trigger: 'blur' }
                ],
                Correct_answer: [
                    { required: true, message: '请选择一个选项', trigger: 'change' }
                ],
                Answer_analysis: [
                    { required: true, message: '请输入答案解析', trigger: 'blur' },
                    { min: 1, max: 500, message: '长度在 1 到 500 个字符', trigger: 'blur' }
                ],
                label: [
                    { required: true, message: '请输入标签内容', trigger: 'blur' },
                    { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
                ],

            },

        };
    },
    methods: {
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        submitForm(formName) {
            let _this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm)
                    axios.post('http://localhost:8080/../..', this.ruleForm).then(function (resp) {
                        if (resp.data) {
                            _this.$alert(_this.ruleForm.question_bank_name + '添加成功', '', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$router.push('/question_bank')
                                }
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
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
    /* line-height: 60px; */
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
</style>
