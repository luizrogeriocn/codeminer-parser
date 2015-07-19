var Helper = function(){
  
  this.get_attribute = function(text_param, re_param){
    var m;
    do {
        m = re_param.exec(text_param);
        if (m)
          return m[1];
    } while (m);
  };
};
module.exports = Helper;