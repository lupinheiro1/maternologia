import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Como organizar a rotina do bebê nos primeiros 100 dias",
    excerpt: "Dicas práticas para criar uma rotina leve e adaptável para você e seu pequeno.",
    category: "Rotina",
    date: "20 Jan 2026",
    image: null,
  },
  {
    id: 2,
    title: "Sling, canguru ou wrap: qual o melhor para você?",
    excerpt: "Entenda as diferenças e descubra qual tipo de carregador combina com seu estilo de vida.",
    category: "Carregadores",
    date: "15 Jan 2026",
    image: null,
  },
  {
    id: 3,
    title: "A culpa materna: como lidar com esse sentimento",
    excerpt: "Por que sentimos tanta culpa e como podemos acolher esse sentimento sem nos perdermos.",
    category: "Bem-estar",
    date: "10 Jan 2026",
    image: null,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-card/50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-2">
              Blog
            </h2>
            <p className="text-muted-foreground">
              Reflexões, dicas e acolhimento para sua jornada materna.
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="mt-4 md:mt-0 text-primary hover:text-primary/80 gap-2"
          >
            Ver todos os artigos
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-blush to-muted rounded-xl mb-5 overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                  <span className="text-sm">Imagem do artigo</span>
                </div>
              </div>

              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
