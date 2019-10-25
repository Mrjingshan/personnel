<template>
  <div>
      <form-create v-model="fApi" :rule="rule" :option="option" />
  </div>
</template>
<script>
import { maker } from '@form-create/element-ui'
export default {
    data(){
        return {
            fApi:{},
            //组件参数配置
            option:{
                //表单提交事件
                onSubmit:function (formData) {
                },
                global: {
                '*': {
                    props: {
                        // disabled: true
                    }
                }
                }
            },
            rule:[],
        }
    },
    computed:{
        //  rule(){
        //    const a = new Promise(resolve=>{
        //         this.$serve({ url: '/getForm',method: 'get'}).then(res=>{
        //             resolve(res)
        //         }).catch(error => {
        //     });
        //     })
        //  return a
        // }
    },
    mounted(){
        // console.log(this);
         this.init()
    },
    methods:{
        async init(){// 开启async模式,优化代码理解
             /* 核心规则函数获取 */
           await this.$serve({ url: '/getForm',method: 'get'}).then(res=>{
                this.rule = maker.parse(res); 
            })
            /* 方法绑定 */
            this.rule.find("test").on={
                change(e){
                    console.log(e)
                }
            }
            this.rule.find("cate_id").on={
                change(e){
                    console.log(e)
                }
            }
        },
       
        

    }

}
</script>

<style>

</style>