//一些简单的数据
function auto(str) {}
function range(min, max) {}
var RuleCaches = new Array();
function CacheRule(data) {
  var name = data.rulename;
  RuleCaches[name] = data;
}
function LoadCacheRule(str) {
  if (RuleCaches[str] == undefined) {
    console.log("error no cached rules");
  }
  return RuleCaches[str];
}
function GetRuleList() {
  return [{ id:0, name: "COC6" }];
}
export {GetRuleList, CacheRule, LoadCacheRule };
