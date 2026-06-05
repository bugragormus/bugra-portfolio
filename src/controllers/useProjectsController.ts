import { useState, useMemo } from "react";
import { projectCategories, ProjectCategory, Project } from "../models/projectsData";

export const useProjectsController = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredCategories = useMemo(() => {
    return projectCategories
      .map((cat) => {
        // If selected category is not "all", and it doesn't match this category, filter it out completely
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return null;
        }

        // Apply search query filter
        const filteredProjects = cat.projects.filter((project) => {
          const searchLower = searchQuery.toLowerCase();
          const matchesTitle = project.title.toLowerCase().includes(searchLower);
          const matchesDesc = project.description.toLowerCase().includes(searchLower);
          const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(searchLower));
          return matchesTitle || matchesDesc || matchesTags;
        });

        if (filteredProjects.length === 0) {
          return null;
        }

        return {
          ...cat,
          projects: filteredProjects,
        };
      })
      .filter((cat): cat is ProjectCategory => cat !== null);
  }, [selectedCategory, searchQuery]);

  const featuredProjects = useMemo(() => {
    const allProjects: Project[] = [];
    projectCategories.forEach((cat) => {
      cat.projects.forEach((proj) => {
        if (proj.isFeatured) {
          allProjects.push(proj);
        }
      });
    });
    return allProjects;
  }, []);

  return {
    selectedCategory,
    searchQuery,
    filteredCategories,
    featuredProjects,
    handleCategoryChange,
    handleSearchChange,
    categoriesList: [
      { id: "all", label: "All Work" },
      { id: "ml", label: "Machine Learning & AI" },
      { id: "data", label: "Data Analysis" },
      { id: "tools", label: "Utilities" },
      { id: "web", label: "Engineering" },
    ],
  };
};

export type UseProjectsControllerReturn = ReturnType<typeof useProjectsController>;
