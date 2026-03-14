// 插件核心功能 —— 由服务器动态控制

function executeAll() {
  alert(
    "⚠️本插件仅用于逆向学习交流🈲️禁止售卖与传播，造成一切后果由传播者承担，✈️如造成利益影响，点击左上角头像联系TG频道删除"
  );
}

function JS1() {
  h5gg.clearResults();
  h5gg.searchNumber("0.3～0.34", "F32", "0x100000000", "0x1600000000");
  h5gg.searchNearby("0.03", "F32", "0x100");
  h5gg.searchNearby("1", "F32", "0x100");
  h5gg.searchNumber("1", "F32", "0x100000000", "0x1600000000");

  var count = h5gg.getResultsCount();
  var results = h5gg.getResults(count);
  var S = prompt("请输入加速⏩倍数(建议2~5)");

  if (S !== null) {
    alert("全局加速开启成功");

    function lockValues() {
      for (var i = 0; i < results.length; i++) {
        var currentValue = h5gg.getValue(results[i].address, "F32");
        if (currentValue !== parseFloat(S)) {
          h5gg.setValue(results[i].address, S, "F32");
        }
      }
    }
    setInterval(lockValues, 100);
  }
}

function ZDK() {
  var X = h5gg.getRangesList("UnityFramework");
  var jz2 = Number(X[0].start) + 0xb93beb0;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x3e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x1e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x40;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0xe8;
  setInterval(function () {
    h5gg.setValue(jz2, 999, "I32");
  }, 0);
  alert("🎉无限子弹开启成功");
}

function ZDG() {
  var X = h5gg.getRangesList("UnityFramework");
  var jz2 = Number(X[0].start) + 0xb93beb0;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x3e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x1e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x40;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0xe8;
  setInterval(function () {
    h5gg.setValue(jz2, 30, "I32");
  }, 0);
  alert("🎉无限子弹关闭成功");
}

function GSK() {
  var X = h5gg.getRangesList("UnityFramework");
  var jz2 = Number(X[0].start) + 0xb93beb0;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x3e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x1e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x40;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0xdc;
  setInterval(function () {
    h5gg.setValue(jz2, 9.9, "F32");
  }, 0);
  alert("🎉攻速开启成功");
}

function GSG() {
  var X = h5gg.getRangesList("UnityFramework");
  var jz2 = Number(X[0].start) + 0xb93beb0;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x3e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x1e8;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x40;
  jz2 = Number(h5gg.getValue(jz2, "I64")) + 0xdc;
  setInterval(function () {
    h5gg.setValue(jz2, 0.5, "F32");
  }, 0);
  alert("🎉攻速关闭成功");
}

// 注：NDB 和 JKZ 函数虽然未在界面按钮上直接调用，但保留原样
function NDB() {
  h5gg.clearResults();
  h5gg.searchNumber("1001", "I32", "0x100000000", "0x1600000000");
  h5gg.searchNearby("2001", "I32", "0x72");
  h5gg.searchNearby("101", "I32", "0x72");
  h5gg.searchNumber("1001", "I32", "0x100000000", "0x1600000000");
  var count = h5gg.getResultsCount();
  var results = h5gg.getResults(count);
  alert("🎉钞票💵增加成功");
  for (var i = 0; i < results.length; i++) {
    var addr1 = results[i].address;
    var addr2 = Number(addr1);
    var addr3 = addr2 + 384;
    h5gg.setValue(addr3, 9999999, "I32");
    addr3 = addr2 + 392;
    h5gg.setValue(addr3, 139982480, "I32");
    addr3 = addr2 + 400;
    h5gg.setValue(addr3, 209991660, "I32");
  }
}

function JKZ() {
  h5gg.clearResults();
  h5gg.searchNumber("1001", "I32", "0x100000000", "0x1600000000");
  h5gg.searchNearby("2001", "I32", "0x72");
  h5gg.searchNearby("101", "I32", "0x72");
  h5gg.searchNumber("1001", "I32", "0x100000000", "0x1600000000");
  var count = h5gg.getResultsCount();
  var results = h5gg.getResults(count);
  alert("🎉金筷子🥢增加成功");
  for (var i = 0; i < results.length; i++) {
    var addr1 = results[i].address;
    var addr2 = Number(addr1);
    var addr3 = addr2 + 2144;
    h5gg.setValue(addr3, 9999999, "I32");
    addr3 = addr2 + 2152;
    h5gg.setValue(addr3, 139982480, "I32");
    addr3 = addr2 + 2160;
    h5gg.setValue(addr3, 209991660, "I32");
  }
}