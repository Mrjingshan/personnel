<template>
  <div>
    <el-table  ref="dragTable" :data="dataList" border style="width: 100%">
         <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="title" label="名称">
            <template slot-scope="scope" >
                <el-input v-model="scope.row.title"></el-input>
            </template>
        </el-table-column>
    </el-table>
    <div class="show-d">
      <el-tag>The default order :</el-tag> {{ oldList }}
    </div>
    <div class="show-d">
      <el-tag>The after dragging order :</el-tag> {{ newList }}
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
    data(){
        return{
            dataList:[],
            sortable: null,
             oldList: [],
             newList: []
        }
    },
    computed:{
    },
    mounted(){
        this.init()
    },
    methods:{
        async init(){
             /* 核心规则函数获取 */
           await this.$serve({ url: '/getForm',method: 'get'}).then(res=>{
                this.dataList = res; 
            })
            this.oldList = this.dataList.map(v => v.title)
            this.newList = this.oldList.slice()
            this.$nextTick(() => {
                this.setSort()
            })
        },
          setSort() {
                const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
                console.log(el);
                Sortable.create(el, {
                ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
                    setData: function(dataTransfer) {
                    // to avoid Firefox bug
                    // Detail see : https://github.com/RubaXa/Sortable/issues/1012
                    dataTransfer.setData('Text', '')
                },
                onEnd: evt => {
                    const targetRow = this.dataList.splice(evt.oldIndex, 1)[0]
                    this.dataList.splice(evt.newIndex, 0, targetRow)
                    // for show the changes, you can delete in you code
                    const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
                    this.newList.splice(evt.newIndex, 0, tempIndex)
                }
            });
        }
    }
}
</script>

<style>

</style>