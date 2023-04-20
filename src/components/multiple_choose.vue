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
                                        <el-radio :label="3" style="font-weight: bold;">单选题</el-radio>
                                        <el-radio :label="6" style="font-weight: bold;">多选题</el-radio>
                                        <el-radio :label="9" style="font-weight: bold;">判断题</el-radio>
                                        <el-radio :label="12" style="font-weight: bold;">填空题</el-radio>
                                        <el-radio :label="15" style="font-weight: bold;">问答题</el-radio>
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
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "
                                                style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                                <i class="el-icon-star-on" style="color:#DC143C"></i>
                                                <div style="color:black">题干:</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="21">
                                            <div class="grid-content ">
                                                <el-input type="textarea" :rows="6" placeholder=" " v-model="textarea"
                                                    maxlength="500" show-word-limit size>
                                                </el-input>
                                            </div>
                                        </el-col>
                                        <el-col :span="1">
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content    ">图片:</div>
                                        </el-col>
                                        <el-col :span="20" style="display: flex;justify-content:start;">
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
                                        </el-col>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="grid-content ">
                                                <div slot="tip" class="el-upload__tip"
                                                    style="font-size: 14px;font-weight: bold; color:#c0c4cc;display: flex;justify-content: start;">
                                                    允许上传的图片格式为jpg、jpeg、gif、png，最多上传4张照片，大小限制5M以内</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "
                                                style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                                <i class="el-icon-star-on" style="color:#DC143C"></i>
                                                <div style="color:black">选项:</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="22">
                                            <div class="grid-content ">
                                                <el-row>
                                                    <el-col :span="24">
                                                        <el-row>
                                                            <el-col :span="1">
                                                                <div class="grid-content "
                                                                    style="display: flex;flex-direction: column;justify-content: center;">
                                                                    A:</div>
                                                            </el-col>
                                                            <el-col :span="10">
                                                                <div class="grid-content ">
                                                                    <el-input type="text" placeholder="" v-model="text"
                                                                        maxlength="100" show-word-limit>
                                                                    </el-input>
                                                                </div>
                                                            </el-col>
                                                            <el-col :span="1">
                                                                <div class="grid-content"
                                                                    style="display: flex;flex-direction: column;justify-content: center;">
                                                                    <router-link to=""><i
                                                                            class="el-icon-close"></i></router-link>
                                                                </div>
                                                            </el-col>
                                                            <el-col :span="12">
                                                                <div class="grid-content "
                                                                    style="display: flex;flex-direction: column;justify-content: center;align-items: start;">
                                                                    <router-link style="text-decoration:none;color:#59aaee;"
                                                                        to="">添加图片</router-link>
                                                                </div>
                                                            </el-col>
                                                        </el-row>
                                                    </el-col>
                                                </el-row>
                                                <el-row>
                                                    <el-col :span="24">
                                                        <div class="grid-content ">
                                                            <el-row>
                                                                <el-col :span="1">
                                                                    <div class="grid-content "
                                                                        style="display: flex;flex-direction: column;justify-content: center;">
                                                                        B:</div>
                                                                </el-col>
                                                                <el-col :span="10">
                                                                    <div class="grid-content ">
                                                                        <el-input type="text" placeholder="" v-model="text"
                                                                            maxlength="100" show-word-limit>
                                                                        </el-input>
                                                                    </div>
                                                                </el-col>
                                                                <el-col :span="1">
                                                                    <div class="grid-content"
                                                                        style="display: flex;flex-direction: column;justify-content: center;">
                                                                        <router-link to=""><i
                                                                                class="el-icon-close"></i></router-link>
                                                                    </div>
                                                                </el-col>
                                                                <el-col :span="12">
                                                                    <div class="grid-content "
                                                                        style="display: flex;flex-direction: column;justify-content: center;align-items: start;">
                                                                        <router-link
                                                                            style="text-decoration:none;color:#59aaee;"
                                                                            to="">添加图片</router-link>
                                                                    </div>
                                                                </el-col>
                                                            </el-row>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                                <el-row>
                                                    <el-col :span="24">
                                                        <div class="grid-content ">
                                                            <el-row>

                                                                <el-col :span="1">
                                                                    <div class="grid-content "
                                                                        style="display: flex;flex-direction: column;justify-content: center;">
                                                                        C:</div>
                                                                </el-col>
                                                                <el-col :span="10">
                                                                    <div class="grid-content ">
                                                                        <el-input type="text" placeholder="" v-model="text"
                                                                            maxlength="100" show-word-limit>
                                                                        </el-input>
                                                                    </div>
                                                                </el-col>
                                                                <el-col :span="1">
                                                                    <div class="grid-content"
                                                                        style="display: flex;flex-direction: column;justify-content: center;">
                                                                        <router-link to=""><i
                                                                                class="el-icon-close"></i></router-link>
                                                                    </div>
                                                                </el-col>
                                                                <el-col :span="12">
                                                                    <div class="grid-content "
                                                                        style="display: flex;flex-direction: column;justify-content: center;align-items: start;">
                                                                        <router-link
                                                                            style="text-decoration:none;color:#59aaee;"
                                                                            to="">添加图片</router-link>
                                                                    </div>
                                                                </el-col>
                                                            </el-row>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                                <el-row>
                                                    <el-col :span="24">
                                                        <div class="grid-content ">
                                                            <el-row>
                                                                <el-col :span="1">
                                                                    <div class="grid-content "
                                                                        style="display: flex;flex-direction: column;justify-content: center;">
                                                                        D:</div>
                                                                </el-col>
                                                                <el-col :span="10">
                                                                    <div class="grid-content ">
                                                                        <el-input type="text" placeholder="" v-model="text"
                                                                            maxlength="100" show-word-limit>
                                                                        </el-input>
                                                                    </div>
                                                                </el-col>
                                                                <el-col :span="1">
                                                                    <div class="grid-content"
                                                                        style="display: flex;flex-direction: column;justify-content: center;">
                                                                        <router-link to=""><i
                                                                                class="el-icon-close"></i></router-link>
                                                                    </div>
                                                                </el-col>
                                                                <el-col :span="12">
                                                                    <div class="grid-content "
                                                                        style="display: flex;flex-direction: column;justify-content: center;align-items: start;">
                                                                        <router-link
                                                                            style="text-decoration:none;color:#59aaee;"
                                                                            to="">添加图片</router-link>
                                                                    </div>
                                                                </el-col>
                                                            </el-row>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "
                                                style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                                <i class="el-icon-star-on" style="color:#DC143C"></i>正确答案:
                                                <div></div>
                                            </div>
                                        </el-col>
                                        <el-col :span="22">
                                            <div class="grid-content "
                                                style="padding-left: 10px; padding-top: 3px; display: flex;flex-direction: row;justify-content: start;align-items: center;">
                                                <el-radio v-model="radio1" label="1"
                                                    style="display: flex;flex-direction: row;justify-content: start;align-items:center;">A</el-radio>
                                                <el-radio v-model="radio1" label="2"
                                                    style="display: flex;flex-direction: row;justify-content: start;align-items: center;">B</el-radio>
                                                <el-radio v-model="radio1" label="3"
                                                    style="display: flex;flex-direction: row;justify-content: start;align-items: center;">C</el-radio>
                                                <el-radio v-model="radio1" label="4"
                                                    style="display: flex;flex-direction: row;justify-content: start;align-items: center;">D</el-radio>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "
                                                style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                                <div style="color:black">答案解析:</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="21">
                                            <div class="grid-content ">
                                                <el-input type="textarea" :rows="6" placeholder=" " v-model="textarea"
                                                    maxlength="500" show-word-limit size>
                                                </el-input>
                                            </div>
                                        </el-col>
                                        <el-col :span="1">
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content    "></div>
                                        </el-col>
                                        <el-col :span="20" style="display: flex;justify-content:start;">
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
                                        </el-col>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="grid-content ">
                                                <div slot="tip" class="el-upload__tip"
                                                    style="font-size: 14px;font-weight: bold; color:#c0c4cc;display: flex;justify-content: start;">
                                                    允许上传的图片格式为jpg、jpeg、gif、png，最多上传4张照片，大小限制5M以内</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="2">
                                            <div class="grid-content "
                                                style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                                <div style="color:black">标签:</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <div class="grid-content ">
                                                <el-input placeholder=" " v-model="input" clearable>
                                                </el-input>
                                            </div>
                                        </el-col>
                                        <el-col :span="14">
                                            <div class=" grid-content "
                                                style="padding-left: 20px;padding-top: 3px; display: flex;flex-direction: row; justify-content: start;">
                                                <el-button size="medium" round
                                                    style=" color:#2191ff; margin-top: 3px; display: flex;flex-direction: row; justify-content: space-between;"><i
                                                        class="el-icon-plus"></i>
                                                    <div style="padding-top: 2px;">新增标签</div>
                                                </el-button>
                                            </div>
                                        </el-col>
                                    </el-row>
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
        <el-footer>
            <el-row>
                <el-col :span="14">
                    <div class="grid-content "></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content " style="display: flex;flex-direction: row;justify-content:space-between;">
                        <el-button type="primary">保存多选题</el-button>
                        <el-button>保存并继续</el-button>
                        <el-button>取消</el-button>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content "></div>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'single_choose',
    data() {
        return {
            input: '',
            text: '',
            textarea: '',
            radio: 5,
            radio1: 4,
            textarea2: '',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
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
}</style>
