// uno.config.ts
import { defineConfig, transformerDirectives } from 'unocss';
import { presetUno } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
 
export default defineConfig({
  // 预设
  presets: [
    presetUno(),
  ],
  // 快捷方式, 将多个规则组合成单个简写
  shortcuts: [
   // flex
   [
    /^f-((c|s|e)(-(c|s|e|b|a))*)$/,
    ([, , g1, , g2]) => {
      let style = ``;
      const temps = [
        { k: "c", v: "center" },
        { k: "s", v: "start" },
        { k: "e", v: "end" },
        { k: "b", v: "between" },
        { k: "a", v: "around" }
      ];

      const r1 = temps.find(i => i.k == g1);
      style = `flex items-${r1?.v || "center"} content-${r1?.v || "center"}`;

      if (g2) {
        const r2 = temps.find(i => i.k == g2);
        style += ` justify-${r2?.v || "center"}`;
      }
      return style;
    }
  ],
   
  
],
  // 自定义规则
  rules: 
  [
    // 注意：属性语法遵循 CSS 属性语法，例如 font-weight 而不是 fontWeight。如果属性名中有连字符 -，应该用引号括起来。
    ['font-bold', { 'font-weight': 700 }],
  ],
  transformers: [
    transformerDirectives(),
  ],
});