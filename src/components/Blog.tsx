import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Minute Morning Meditation for Busy Professionals',
    excerpt: 'Start your day with clarity and focus using these simple meditation techniques that fit into any schedule.',
    author: 'Dr. Sarah Chen',
    date: '2025-10-01',
    readTime: '4 min read',
    category: 'Meditation',
    image: 'https://images.unsplash.com/photo-1687783615494-b4a1f1af8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3IlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTk1NTk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true
  },
  {
    id: 2,
    title: 'The Science Behind Massage Therapy Benefits',
    excerpt: 'Discover how massage therapy can improve circulation, reduce stress, and promote overall wellness.',
    author: 'Michael Thompson',
    date: '2025-09-28',
    readTime: '6 min read',
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHdlbGxuZXNzfGVufDF8fHx8MTc1OTU3ODMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  },
  {
    id: 3,
    title: 'Nutrition Tips for Better Sleep Quality',
    excerpt: 'Learn how your diet affects your sleep patterns and discover foods that promote restful nights.',
    author: 'Emma Rodriguez',
    date: '2025-09-25',
    readTime: '5 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1670165088604-5a39f5c1be51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1OTQ5NTIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  },
  {
    id: 4,
    title: 'Building a Sustainable Yoga Practice at Home',
    excerpt: 'Create a consistent home yoga routine with these practical tips and beginner-friendly sequences.',
    author: 'Emma Rodriguez',
    date: '2025-09-22',
    readTime: '7 min read',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1687783615494-b4a1f1af8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3IlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTk1NTk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  },
  {
    id: 5,
    title: 'The Power of Aromatherapy in Stress Management',
    excerpt: 'Explore how essential oils can naturally reduce stress and anxiety while promoting emotional balance.',
    author: 'Dr. Sarah Chen',
    date: '2025-09-20',
    readTime: '5 min read',
    category: 'Aromatherapy',
    image: 'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNlbnRlciUyMHNwYSUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU5NTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  },
  {
    id: 6,
    title: 'Mindful Eating: Transform Your Relationship with Food',
    excerpt: 'Discover how mindfulness can help you develop a healthier, more conscious approach to eating.',
    author: 'Dr. Sarah Chen',
    date: '2025-09-18',
    readTime: '6 min read',
    category: 'Mindfulness',
    image: 'https://images.unsplash.com/photo-1670165088604-5a39f5c1be51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1OTQ5NTIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  }
];

const categories = ['All', 'Meditation', 'Massage', 'Nutrition', 'Yoga', 'Aromatherapy', 'Mindfulness'];

export function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-muted/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] pb-2.5 md:pb-4 bg-clip-text text-transparent">
            Wellness Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover insights, tips, and expert advice on your journey to optimal wellness and mindful living.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#9674c8] to-[#9b04d2]  text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}