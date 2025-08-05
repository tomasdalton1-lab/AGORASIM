'use client'

import { useState } from 'react'
import styles from './solution.module.css'

interface SolutionItem {
  id: number
  title: string
  description: string
  icon: string
}

interface SolutionData {
  heading: string
  subheading: string
  solutions: SolutionItem[]
}

export function Solution() {
  // Mock data
  const solutionData: SolutionData = {
    heading: 'Nuestras Soluciones',
    subheading: 'Ofrecemos soluciones integrales para impulsar tu negocio',
    solutions: [
      {
        id: 1,
        title: 'Estrategia Digital',
        description: 'Desarrollamos estrategias personalizadas para maximizar tu presencia online',
        icon: '🚀'
      },
      {
        id: 2,
        title: 'Automatización',
        description: 'Optimizamos tus procesos para ahorrar tiempo y recursos',
        icon: '⚙️'
      },
      {
        id: 3,
        title: 'Análisis de Datos',
        description: 'Convertimos datos en insights accionables para tu negocio',
        icon: '📊'
      }
    ]
  }

  return (
    <section id="solution" className={`${styles.solution} font-montserrat`}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className={styles.heading}>{solutionData.heading}</h2>
        <p className={styles.subheading}>{solutionData.subheading}</p>
        
        <div className={styles.solutionsGrid}>
          {solutionData.solutions.map(item => (
            <div key={item.id} className={styles.solutionCard}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.solutionTitle}>{item.title}</h3>
              <p className={styles.solutionDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
