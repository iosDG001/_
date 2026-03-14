// ========== 光合战队插件 - 远程 JS ==========
// 版本: 1.0 测试版

console.log("🚀 远程 JS 开始执行");
alert("✅ 远程 JS 已加载，正在初始化...");

// ===== 基础测试函数 =====
window.testFunc = function() {
    alert("✅ 测试函数执行成功！");
    console.log("testFunc executed");
    return true;
};

// ===== 公告页函数 =====
window.executeAll = function() {
    alert("⚠️ 本插件仅用于逆向学习交流\n🈲 禁止售卖与传播\n📢 如造成影响，联系TG频道删除");
};

// ===== 子弹开 =====
window.ZDK = function() {
    alert("🎯 ZDK 函数被调用");
    try {
        // 检查 h5gg 是否存在
        if (typeof h5gg === 'undefined') {
            alert("❌ h5gg 未定义，请确认是否在游戏内运行");
            return;
        }
        
        alert("开始执行 ZDK 功能...");
        var X = h5gg.getRangesList('UnityFramework');
        alert("找到模块数量: " + (X ? X.length : 0));
        
        if (!X || X.length === 0) {
            alert("❌ 未找到 UnityFramework 模块");
            return;
        }
        
        var base = Number(X[0].start);
        alert("模块基址: 0x" + base.toString(16).toUpperCase());
        
        // 指针链计算
        var jz2 = base + 0xB93BEB0;
        alert("第一层地址: 0x" + jz2.toString(16).toUpperCase());
        
        jz2 = Number(h5gg.getValue(jz2, 'I64')) + 0x3E8;
        alert("第二层地址: 0x" + jz2.toString(16).toUpperCase());
        
        jz2 = Number(h5gg.getValue(jz2, 'I64')) + 0x1E8;
        alert("第三层地址: 0x" + jz2.toString(16).toUpperCase());
        
        jz2 = Number(h5gg.getValue(jz2, 'I64')) + 0x40;
        alert("第四层地址: 0x" + jz2.toString(16).toUpperCase());
        
        jz2 = Number(h5gg.getValue(jz2, 'I64')) + 0xE8;
        alert("最终地址: 0x" + jz2.toString(16).toUpperCase());
        
        // 设置值
        h5gg.setValue(jz2, 999, 'I32');
        alert("🎉 无限子弹开启成功！");
        
    } catch (e) {
        alert("❌ ZDK 出错: " + e.message);
    }
};

// ===== 子弹关 =====
window.ZDG = function() {
    alert("🔫 ZDG 函数被调用");
    // 类似 ZDK 的实现...
    alert("无限子弹关闭功能待实现");
};

// ===== 攻速开 =====
window.GSK = function() {
    alert("⚡ GSK 函数被调用");
    // 攻速开启实现...
    alert("攻速开启功能待实现");
};

// ===== 攻速关 =====
window.GSG = function() {
    alert("⏱️ GSG 函数被调用");
    // 攻速关闭实现...
    alert("攻速关闭功能待实现");
};

// ===== 自定义加速 =====
window.JS1 = function() {
    alert("🚀 JS1 函数被调用");
    try {
        var S = prompt("请输入加速倍数(建议2~5)", "2");
        if (S === null) return;
        
        alert("加速倍数设置为: " + S);
        // 这里添加你的加速逻辑
        
    } catch (e) {
        alert("❌ JS1 出错: " + e.message);
    }
};

// ===== 可选：钞票功能 =====
window.NDB = function() {
    alert("💰 NDB 函数被调用");
    // 实现钞票修改...
};

// ===== 可选：金筷子功能 =====
window.JKZ = function() {
    alert("🥢 JKZ 函数被调用");
    // 实现金筷子修改...
};

alert("🎉 所有函数定义完成！");
console.log("远程 JS 加载完成，可用函数:", Object.keys(window).filter(k => typeof window[k] === 'function'));