from openai import OpenAI
import json

API_KEY = "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"

def generate_gic_article():
    client = OpenAI(api_key=API_KEY, base_url="https://api.perplexity.ai")
    
    system_prompt = """You are a senior financial analyst specializing in Canadian investment markets.
    Write in a concise, factual style with these characteristics:
    1. Direct and efficient language
    2. Focus on key facts and figures
    3. Short sentences and clear structure
    4. Objective, neutral tone
    5. Emphasis on data and analysis
    """
    
    user_prompt = """Write a comprehensive 1500-word article analyzing whether Guaranteed Investment Certificates (GICs) are a good investment choice.

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
    - Statistical analysis
    """

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ]

    try:
        response = client.chat.completions.create(
            model="sonar-pro",
            messages=messages,
            temperature=0.7,
            max_tokens=2500
        )
        
        article_content = response.choices[0].message.content
        
        # Create the blog post metadata and content
        blog_post = {
            "title": "GICs vs Other Investments: A Data-Driven Analysis",
            "author": "daniel-schoester",
            "date": "2024-03-22T12:00:00Z",
            "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            "description": "An objective analysis comparing GICs with alternative investment options, examining returns, risks, and optimal portfolio allocation strategies.",
            "category": "Investment Analysis",
            "tags": ["GIC Analysis", "Investment Comparison", "Portfolio Strategy"],
            "published": True,
            "content": article_content
        }
        
        # Save the article as a markdown file
        with open("content/blog/perplexity-gic-analysis.md", "w") as f:
            f.write("---\n")
            for key, value in blog_post.items():
                if key != "content":
                    if isinstance(value, list):
                        f.write(f"{key}:\n")
                        for item in value:
                            f.write(f"  - {item}\n")
                    else:
                        f.write(f"{key}: {json.dumps(value)}\n")
            f.write("---\n\n")
            f.write(article_content)
        
        print("Article generated and saved successfully!")
        
    except Exception as e:
        print(f"Error generating article: {str(e)}")

if __name__ == "__main__":
    generate_gic_article()