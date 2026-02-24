import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/resume';
import Magnetic from '@/components/common/magnetic';

const SkillsSection: React.FC = () => {
  return (
    <div className="lg:px-10 py-14 border-t border-t-zinc-500">
      <div className="uppercase text-3xl pb-10">Skills</div>
      <div className="flex flex-col gap-12">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <div className="text-lg text-zinc-400 mb-4 uppercase tracking-wider">
              {cat.category}
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.1 + skillIndex * 0.05,
                  }}
                >
                  <Magnetic>
                    <div className="border border-zinc-600 rounded-full px-5 py-2 text-sm lg:text-base hover:bg-zinc-300 hover:text-black transition-colors duration-300 cursor-default">
                      {skill}
                    </div>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
