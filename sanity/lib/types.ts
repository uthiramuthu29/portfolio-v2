export type Project = {
    _id: string;
    title: string;
    description: string | null;
    darkLogo: string | null;
    lightLogo: string | null;
    image: string | null;
    projectUrl: string | null;
    featured: boolean;
  };