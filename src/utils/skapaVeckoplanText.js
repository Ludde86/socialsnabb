export const skapaVeckoplanText = (veckoplan, veckostrategi) => {
  return `
📅 VECKOPLAN

🎯 Strategi:
${veckostrategi}

━━━━━━━━━━

${veckoplan
  .map(
    (post) => `
${post.dag.toUpperCase()}

🕘 ${post.tid}

${post.syfte}

📝 Inlägg:
${post.text}

📸 Bildidé:
${post.bildIde}

🎯 Mål:
${post.mal}
`,
  )
  .join("\n━━━━━━━━━━\n")}
`;
};
