import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 text-sm font-medium rounded-full glass inline-block mb-6">
            L'Avenir de la Distribution Musicale
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Développez Votre Carrière Musicale avec l'IA
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Connectez-vous avec des artistes, des influenceurs et des marques. Distribuez votre musique mondialement et développez votre carrière avec des insights basés sur l'IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors w-full sm:w-auto">
              Commencer à Créer
            </button>
            <button className="px-8 py-3 rounded-lg glass hover:bg-white/10 transition-colors w-full sm:w-auto">
              En Savoir Plus
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};