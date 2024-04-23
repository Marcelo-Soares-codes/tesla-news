import { Card } from "./cards";
import "./style.css";

export const Articles = ({ articles }) => (
  <div className="Articles">
    {articles.map((article, index) =>
      article.title !== "[Removed]" ? (
        <Card
          key={index}
          url={article.url}
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
          author={article.author}
        />
      ) : null
    )}
  </div>
);
