<!-- question_bank page -->
<!--

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
                                        <el-input placeholder="" v-model="input1" clearable>
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
                                        <el-input placeholder="请输入创建人" v-model="input2" clearable>
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
            input1: '',
            input2: '',
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

-->

<!-- Create page -->
<!--

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

-->

<!-- single_choose page -->
<!--

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
                                    <el-radio-group v-model="radio" >
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
                        <el-button type="primary">保存单选题</el-button>
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
            radio: '3',
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


-->

<!-- multiple_choose page -->
<!--

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
                                        <el-radio v-model="radio" label="3" style="font-weight: bold;">单选题</el-radio>
                                        <el-radio v-model="radio" label="6" style="font-weight: bold;">多选题</el-radio>
                                        <el-radio v-model="radio" label="9" style="font-weight: bold;">判断题</el-radio>
                                        <el-radio v-model="radio" label="12" style="font-weight: bold;">填空题</el-radio>
                                        <el-radio v-model="radio" label="15" style="font-weight: bold;">问答题</el-radio>
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
    name: 'multiple_choose',
    data() {
        return {
            input: '',
            text: '',
            textarea: '',
            radio: '6',
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


-->

<!-- judgement page -->
<!--

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
                                        <el-radio v-model="radio" label="3" style="font-weight: bold;">单选题</el-radio>
                                        <el-radio v-model="radio" label="6" style="font-weight: bold;">多选题</el-radio>
                                        <el-radio v-model="radio" label="9" style="font-weight: bold;">判断题</el-radio>
                                        <el-radio v-model="radio" label="12" style="font-weight: bold;">填空题</el-radio>
                                        <el-radio v-model="radio" label="15" style="font-weight: bold;">问答题</el-radio>
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
                                                <i class="el-icon-star-on" style="color:#DC143C"></i>正确答案:
                                                <div></div>
                                            </div>
                                        </el-col>
                                        <el-col :span="22">
                                            <div class="grid-content "
                                                style="padding-left: 10px; padding-top: 3px; display: flex;flex-direction: row;justify-content: start;align-items: center;">
                                                <el-radio v-model="radio1" label="1"
                                                    style="display: flex;flex-direction: row;justify-content: start;align-items:center;">正确</el-radio>
                                                <el-radio v-model="radio1" label="2"
                                                    style="display: flex;flex-direction: row;justify-content: start;align-items: center;">错误</el-radio>
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
                        <el-button type="primary">保存判断题</el-button>
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
    name: 'judegment',
    data() {
        return {
            input: '',
            text: '',
            textarea: '',
            radio: '9',
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


-->

<!-- Q_A_person page -->
<!--

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
                                        <el-radio v-model="radio" label="3" style="font-weight: bold;">单选题</el-radio>
                                        <el-radio v-model="radio" label="6" style="font-weight: bold;">多选题</el-radio>
                                        <el-radio v-model="radio" label="9" style="font-weight: bold;">判断题</el-radio>
                                        <el-radio v-model="radio" label="12" style="font-weight: bold;">填空题</el-radio>
                                        <el-radio v-model="radio" label="15" style="font-weight: bold;">问答题</el-radio>
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
                                            <div class="grid-content "></div>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="grid-content ">
                                                <div slot="tip" class="el-upload__tip"
                                                    style="font-size: 14px;font-weight: bold; color:#c0c4cc;display: flex;justify-content: start;">
                                                    问题没有标准答案，需要人工阅卷</div>
                                            </div>
                                        </el-col>
                                        <el-col :span="2">
                                            <div class="grid-content "></div>
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
                        <el-button type="primary">保存问答题</el-button>
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
    name: 'Q_A_person',
    data() {
        return {
            input: '',
            text: '',
            textarea: '',
            radio: '15',
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


-->