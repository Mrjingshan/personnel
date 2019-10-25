<template>
  <div id="app1">
      <form-create 
        v-model="fApi" 
        :rule="rule" 
        :option="option"
      ></form-create>
  </div>
</template>

<script>
export default {
  data () {
    var _this = this
    return {
     //实例对象
     fApi:{},
     //表单生成规则
     rule:[
       {
          type:'input',
          field:'test',
          title:'商品名称',
           col:{
		        	span:12
	      	}  
        },
        {
          type: "select",
          field: "cate_id",
          title: "产品分类",
          value: [],
          options: [
              {"value": "104", "label": "生态蔬菜", "disabled": false},
              {"value": "105", "label": "新鲜水果", "disabled": false},
          ],
          props: {
              multiple: true
          },
      },
      {
        type:'datePicker',
        field:'created_at',
        title:'创建时间',
          col:{
            span:12
        }
      },
     ],
     //组件参数配置
      option:{
        //表单提交事件
        onSubmit:function (formData) {
          console.log(_this.rule);
          console.log(JSON.stringify(_this.rule));
        },
        global: {
          '*': {
              props: {
                  disabled: true
              }
          }
       }
      },
    };
  },
  methods:{
  }
}

</script>
