// NPM Packages
import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export function useFetchProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  async function getData() {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projectsData = response.items.map((item) => {
        console.log('item:', item);
        const { id } = item.sys;
        const { image, title, url } = item.fields;
        const imageUrl = image?.fields?.file?.url;
        return { id, url, title, imageUrl };
      });

      setProjects(projectsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
}
