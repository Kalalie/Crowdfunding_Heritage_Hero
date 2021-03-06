export const allProjects = [
  {
    id: 1,
    title: "Project one",
    description: "The second project.",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    date_created: "2020-08-21T14:28:23.382748Z",
    owner: 1,
  },
  {
    id: 2,
    title: "Project two",
    description: "The second project. version 2",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    date_created: "2020-08-21T14:28:23Z",
    owner: 1,
  },
  {
    id: 3,
    title: "Project three",
    description: "The second project.",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    date_created: "2020-08-21T14:28:23.382748Z",
    owner: 1,
    categories: [],
  },
  {
    id: 4,
    title: "Project four",
    description: "The second project.",
    goal: 150,
    image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    date_created: "2020-08-21T14:28:23.382748Z",
    owner: 1,
    categories: [],
  },
];

export const oneProject = {
  id: 1,
  title: "Project one",
  description: "The second project.",
  goal: 150,
  image: "https://via.placeholder.com/300.jpg",
  is_open: true,
  date_created: "2020-08-21T14:28:23.382748Z",
  owner: 1,
  pledges: [
    {
      id: 1,
      amount: 35,
      comment: "Great Idea",
      anonymous: true,
      supporter_id: 1,
      project_id: 1,
    },
  ],
};
