
'use client'

interface ProjectFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function ProjectFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground glow-border'
              : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
