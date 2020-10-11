<template>
  <!-- <div class="elysExpenseCreate">
    <div style=" background: white;padding: 50px; border-radius: 10px;">
      <el-row>
      <div class="m25 fl" prop="codePro">
        <span>Merchant:</span><br>
        <el-input class="input1" v-model="formLabelAlign.merchant" placeholder="input" :disabled="this.locked"></el-input>
      </div>
        <div class="m25 fl" prop="codePro">
          <span>Item:</span><br>
          <el-input class="input1" v-model="formLabelAlign.item" placeholder="input" :disabled="this.locked"></el-input>
        </div>
        <div class="m25 fl" prop="codePro">
          <span>Lock:</span><br>
          <el-switch v-model="locked" style='float: left;margin-top: 10px;margin-left: 20px;'></el-switch>
        </div>
        <div class="m25 fl" prop="codePro">
          <span>Amount Spent:</span><br>
          <el-input class="input1" v-model="formLabelAlign.amount" placeholder="input" :disabled="this.locked" type="number"></el-input>
        </div>
        <div class="m25 fl" prop="codePro">
          <span>Date:</span><br>
          <el-date-picker format="yyyy-MMM-dd" style="width:300px;" v-model="formLabelAlign.date" type="date" placeholder="select date" :disabled="this.locked"></el-date-picker>
        </div>
        </el-row>
        <el-row>
        <div class="m25 fl" prop="codePro" style="width:650px;">
          <span>Remark:</span><br>
          <el-input type="textarea" class="input1" v-model="formLabelAlign.remark" placeholder="input" :disabled="this.locked" style="width:650px;"></el-input>
        </div>
        <div class="m25 fl" prop="codePro" style="width:650px;">
          <span>Invoice:</span><br>
          <el-upload action="#" list-type="picture-card" :auto-upload="false" :disabled="this.locked"
          :on-change="handleInvoiceListChange" :file-list="invoiceList">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span class="el-upload-list__item-download" @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span class="el-upload-list__item-document" @click="handlePrint(file)">
                  <i class="el-icon-document"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleInvoiceRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" id="invoiceDialog">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div class="m25 fl" prop="codePro" style="width:650px;">
          <span>Receipts:</span><br>
          <el-upload action="#" list-type="picture-card" :auto-upload="false" :disabled="this.locked"
          :on-change="handleReceiptListChange" :file-list="receiptList">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span class="el-upload-list__item-download" @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span class="el-upload-list__item-document" @click="handlePrint(file)">
                  <i class="el-icon-document"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleReceiptRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" id="receiptDialog">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div style="width:100%;text-align: center;margin-top: 45px;float: left;" prop="codePro">
          <el-button type="primary" :loading="loading" @click="submitForm('formLabelAlign')" v-if="type!='detail'" :disabled="this.locked">Sumbit</el-button>
          <el-button type="primary" @click="cancel()">Back</el-button>
        </div>
      </el-row>
    </div>
  </div> -->
  <div>
    <div class="buttonsetting">
      <div style=" background: white;padding: 50px 50px 20px 50px; border-radius: 10px;">
        <div class="head">
          <el-steps
            :active="active"
            finish-status="success"
            space="300px"
            align-center="true"
          >
            <el-step title="Choose floor"></el-step>
            <el-step title="Confirm floor"></el-step>
            <el-step title="complete"></el-step>
          </el-steps>
        </div>
        <div class="choose">
          <div class="item">
            <div>
              <span>Number of negative floors</span>
            </div>
            <div>
              <input type="number" v-model="min" @blur="change_"/>
            </div>
          </div>
          <div class="item">
            <div>
              <span>Set the highest floor</span>
            </div>
            <div>
              <input type="number" v-model="max" @blur="change"/>
            </div>
          </div>
          <div class="item">
            <div>
              <span>Whether to open the whole floor</span>
            </div>
            <div>
              <el-radio v-model="isAll" label="1" class="radio" @change="change">yes</el-radio>
              <el-radio v-model="isAll" label="0" class="radio" @change="change">no</el-radio>
            </div>
          </div>
          <div class="item">
            <div>
              <span>Single layer/double layer</span>
            </div>
            <div>
              <el-radio
                :disabled="isAll == 1"
                v-model="isSingle"
                label="1"
                class="radio"
                @change="change"
                >Single layer</el-radio
              >
              <el-radio
                :disabled="isAll == 1"
                v-model="isSingle"
                label="0"
                class="radio"
                @change="change"
                >double layer</el-radio
              >
            </div>
          </div>
        </div>
        <div class="negativefloor">
          <div>
            <span>Negative floor</span>
          </div>
          <div class="button">
            <div v-for="item in buttonList_" :key="item.index">
              <button :class="item.isSelect ? 'select' : ''" @click="click(item.index)">
                {{ item.index }}/F
              </button>
            </div>
          </div>
        </div>
        <div class="mainfloor">
          <div>
            <span>Main floor</span>
            <div class="button">
              <div v-for="item in buttonList" :key="item.index">
                <button :class="item.isSelect ? 'select' : ''" @click="click(item.index)">
                {{ item.index }}/F
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style=" background: white;padding: 10px 50px; border-radius: 10px;" class="bottom">
      <button style="background-color:#0977ce" @click="next">Next</button>
      <button style="background-color:#f46c6c">Return</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'elysExpenseCreate',
  data() {
    var validateUser = (rule, value, callback) => {
      if (value != '') {
        this.$api.get('/member/seekIdentifier/' + value, null, r => {
          if (r == false) {
            callback(new Error('expense已存在'))
          } else {
            callback()
          }
        })
      } else {
        callback(new Error('請輸入expense'))
      }
    }
    return {
      min: 3,
      max: 10,
      // 是否全口
      isAll: '1',
      // 是否单双
      isSingle: '1',
      buttonList: [],
      buttonList_: [],
      List: {},
      active: 0,

      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      supplier: '',
      operator: '',
      labelPosition: 'right',
      type: 'new',
      uuid: '',
      loading: false,
      locked: false, // 1为true,0为false,默认false（0）
      activateds: true,
      value: '',
      email: '',
      mobile: '',
      invoiceList: [],
      receiptList: [],
      formLabelAlign: {
        active: 0,
        amount: '',
        date: '',
        id: '',
        invoices: [],
        item: '',
        made: null,
        merchant: null,
        purged: null,
        receipts: [],
        reference: null,
        remark: '',
        user: null,
        lock: 0,
      },
      rules: {
        name: [
          {
            validate: validateUser,
            trigger: 'blur', // 失去焦点时触发
          },
        ],
      },
    }
  },
  created: function() {
    this.change()
    this.change_()
    this.type = this.$route.query.type
    this.uuid = this.$route.query.uuid
    if (this.type == 'alert') {
      this.$api.get('/expense/' + this.$route.query.uuid, null, r => {
        this.formLabelAlign = r
        this.locked = r.lock == 1
        this.activateds = r.active == 1
        for (let i = 0; i < r.invoices.length; i++) {
          // 循环遍历获取到invoices中的图片对象放入到invoiceList
          this.invoiceList.push({
            name: r.invoices[i].image.reference,
            url:
              this.$api.root + '/kernal/asset/' + r.invoices[i].image.reference,
          })
        }
        for (let i = 0; i < r.receipts.length; i++) {
          // 循环遍历获取到receipts中的图片对象放入到receiptList
          this.receiptList.push({
            name: r.receipts[i].image.reference,
            url:
              this.$api.root + '/kernal/asset/' + r.receipts[i].image.reference,
          })
        }
      })
    }
  },
  methods: {
    change() {
      this.buttonList = []
      for (var i = 0; i <= this.max; i++) {
        if (this.isAll == 1) {
          this.buttonList.push({
            index: i,
            isSelect: true,
          })
        } else {
          if (this.isSingle == 1) {
            if (i % 2 == 1) {
              this.buttonList.push({
                index: i,
                isSelect: true,
              })
            } else {
              this.buttonList.push({
                index: i,
                isSelect: false,
              })
            }
          } else {
            if (i % 2 == 1) {
              this.buttonList.push({
                index: i,
                isSelect: false,
              })
            } else {
              this.buttonList.push({
                index: i,
                isSelect: true,
              })
            }
          }
        }
      }
    },
    change_() {
      this.buttonList_ = []
      for (let i = this.min; i > 0; i--) {
        this.buttonList_.push({
          index: -i,
          isSelect: true,
        })
      }
    },
    click(index) {
      this.buttonList[index].isSelect = !this.buttonList[index].isSelect
    },
    next() {
      this.List = {
        buttonList: [],
        min: this.min,
        max: this.max,
        isAll: this.isAll,
        isSingle: this.isSingle,
      }
      for (let i = 0; i < this.buttonList_.length; i++) {
        if (this.buttonList_[i].isSelect) {
          this.List.buttonList.push(this.buttonList_[i].index)
        }
      }
      for (let i = 0; i < this.buttonList.length; i++) {
        if (this.buttonList[i].isSelect) {
          this.List.buttonList.push(this.buttonList[i].index)
        }
      }
      // alert(JSON.stringify(this.List))
      this.$router.push('/buttonsettingStep2?list=' + JSON.stringify(this.List))
    },
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      window.open(this.$api.root + '/kernal/asset/' + file.name)
    },
    handlePrint(file) {
      var a = window.open('', '', 'height=384, width=384')
      a.document.write('<html>')
      a.document.write(
        '<img src="' + this.$api.root + '/kernal/asset/' + file.name + '" />',
      )
      a.document.write('</body></html>')
      a.document.close()
      a.addEventListener(
        'load',
        function() {
          a.print()
        },
        false,
      )
    },
    submitForm(formLabelAlign) {
      if (
        this.formLabelAlign.merchant == '' ||
        this.formLabelAlign.merchant == null
      ) {
        alert('Please input merchant name')
      } else if (
        this.formLabelAlign.item == '' ||
        this.formLabelAlign.item == null
      ) {
        alert('Please input Item')
      } else if (
        this.formLabelAlign.amount == '' ||
        this.formLabelAlign.amount == null
      ) {
        alert('Please input amount spent')
      } else if (
        this.formLabelAlign.date == '' ||
        this.formLabelAlign.date == null
      ) {
        alert('Please input date of expenditure')
      } else {
        this.formLabelAlign.active = this.activateds ? 1 : 0
        this.formLabelAlign.lock = this.locked ? 1 : 0
        this.formLabelAlign.invoices = []
        for (let i = 0; i < this.invoiceList.length; i++) {
          this.formLabelAlign.invoices.push({
            image: {
              reference: this.invoiceList[i].name,
            },
          })
        }
        this.formLabelAlign.receipts = []
        for (let i = 0; i < this.receiptList.length; i++) {
          this.formLabelAlign.receipts.push({
            image: {
              reference: this.receiptList[i].name,
            },
          })
        }
        if (this.uuid != '' && this.uuid != undefined) {
          this.loading = true
          this.$api.put('/expense/save', this.formLabelAlign, r => {
            history.back(-1)
          })
        } else {
          this.loading = true
          this.$api.post('/expense/save', this.formLabelAlign, r => {
            history.back(-1)
          })
        }
      }
    },
    detail() {},
    cancel() {
      history.back(-1)
    },
    topage(type) {
      if (type == 'grounp') {
        this.$router.push('/SystemManagement/CustomentManagement')
      } else if (type == 'branch') {
        this.$router.push('/SystemManagement/branchManagement')
      }
    },
    handleInvoiceRemove(file) {
      if (this.locked) return
      var newList = []
      for (let i = 0; i < this.invoiceList.length; i++) {
        if (this.invoiceList[i].name != file.name) {
          newList[newList.length] = {
            reference: this.invoiceList[i].name,
            url:
              this.$api.root + '/kernal/asset/' + this.invoiceList[i].reference,
          }
        }
        this.invoiceList = newList
      }
    },
    handleInvoiceListChange(file, fileList) {
      if (file.status == 'ready') {
        const bodyFormData = new FormData()
        bodyFormData.append('file', file.raw)
        bodyFormData.append('type', 'EXPENSEINV')
        this.$api.post('/kernal/asset/retain', bodyFormData, r => {
          this.invoiceList.push({
            name: r.reference,
            url: this.$api.root + '/kernal/asset/' + r.reference,
          })
        })
      }
    },
    handleReceiptRemove(file) {
      if (this.locked) return
      var newList = []
      for (let i = 0; i < this.receiptList.length; i++) {
        if (this.receiptList[i].name != file.name) {
          newList[newList.length] = {
            reference: this.receiptList[i].name,
            url:
              this.$api.root + '/kernal/asset/' + this.receiptList[i].reference,
          }
        }
        this.receiptList = newList
      }
    },
    handleReceiptListChange(file, fileList) {
      if (file.status == 'ready') {
        const bodyFormData = new FormData()
        bodyFormData.append('file', file.raw)
        bodyFormData.append('type', 'EXPENSEREC')
        this.$api.post('/kernal/asset/retain', bodyFormData, r => {
          this.receiptList.push({
            name: r.reference,
            url: this.$api.root + '/kernal/asset/' + r.reference,
          })
        })
      }
    },
  },
}
</script>

<style lang="scss">
//   .elysExpenseCreate{
//     width: 100%;
//     .input1{
//       width: 300px;
//     }
//     .m25{
//       margin: 20px 50px auto auto;
//     }
//     .fl{
//       float: left;
//     }
//   }
.buttonsetting {
  width: 100%;
  .head{
    margin-left: -100px;
  }
  .choose {
    margin-top: 20px;
    // margin-left: 100px;
    // height: 80px;
    .item {
      float: left;
      margin-right: 40px;
      input {
        border: 1px solid #dddddd;
      }
    }
  }
  .choose:after{
      content: "";
      display: block;
      height: 0;
      clear:both;
      visibility: hidden;
  }
  .negativefloor,.mainfloor{
    margin-bottom: 10px;
    .button{
      padding-left: 20px;
      padding-bottom: 10px;
      width: 90%;
      background-color:#f0f3f8;
      border: 2px solid #dddddd;
      button{
        float: left;
        margin: 10px 10px 0 0;
        width: 40px;
        height: 40px;
        font-weight: bold;
        background-color: #fff;
        border: none;
        border-radius: 100%;
      }
      button:focus{
        outline: none;
      }
      .select{
        background-color: #f56c6c;
      }
    }
    .button:after{
      content: "";
      display: block;
      height: 0;
      clear:both;
      visibility: hidden;
    }
  }
}
.bottom{
  margin-top: 10px;
  button{
    margin-right: 10px;
    width: 80px;
    height: 3                                                                                                  0px;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
  }
  button:focus{
    outline: none;
  }
}
</style>
