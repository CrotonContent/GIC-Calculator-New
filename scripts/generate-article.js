import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const API_KEY = "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";
const API_URL = "https://api.perplexity.ai/chat/completions";

async function generateGICArticle() {
  const systemPrompt = `You are a senior financial analyst specializing in Canadian investment markets.
Write in a concise, factual style with these characteristics:
1. Direct and efficient language
2. Focus on key facts and figures
3. Short sentences and clear structure
4. Objective, neutral tone
5. Emphasis on data and analysis`;

  const userPrompt = `Write a comprehensive 1500-word article analyzing whether Guaranteed Investment Certificates (GICs) are a good investment choice.

Include:
1. Clear explanation of GICs and basic features
2. Analysis of pros and cons with real market rates
3. Safety comparison with other investments
4. Specific scenarios for optimal GIC use
5. Current market data and statistics
6. Practical recommendations for different investor types

Format with:
- Clear headings
- Bullet points
- Comparison tables
- Current Canadian market data
- Statistical analysis`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "sonar-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2500
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    const articleContent = data.choices[0].message.content;

    const blogPost = {
      title: "GICs vs Other Investments: A Data-Driven Analysis",
      author: "daniel-schoester",
      date: new Date().toISOString(),
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      description: "An objective analysis comparing GICs with alternative investment options, examining returns, risks, and optimal portfolio allocation strategies.",
      category: "Investment Analysis",
      tags: ["GIC Analysis", "Investment Comparison", "Portfolio Strategy"],
      published: true
    };

    // Create markdown content
    let markdown = '---\n';
    for (const [key, value] of Object.entries(blogPost)) {
      if (Array.isArray(value)) {
        markdown += `${key}:\n${value.map(item => `  - ${item}`).join('\n')}\n`;
      } else {
        markdown += `${key}: ${JSON.stringify(value)}\n`;
      }
    }
    markdown += '---\n\n';
    markdown += articleContent;

    // Save the article
    const filePath = join(process.cwd(), 'content', 'blog', 'perplexity-gic-analysis.md');
    await writeFile(filePath, markdown, 'utf8');
    console.log('Article generated and saved successfully!');

  } catch (error) {
    console.error('Error generating article:', error);
  }
}

generateGICArticle();