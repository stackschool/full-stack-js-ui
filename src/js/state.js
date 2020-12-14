import { STACK_OPTIONS} from './constants';

const copy = {
  title: "Nazreen's Portfolio",
  subtitle: "built using Vue.js and Node.js",
  introduction: "Hi there, my name is Nazreen, and I'm a full stack web developer. Welcome to my portfolio."
}

const projects =  [
  {
    title: "Online Food Store",
    image: "https://i.ibb.co/ph6x1mq/2650401.jpg",
    description: "An online store that enables customers to buy food from resellers.",
    techStack: [
      STACK_OPTIONS.VUE,
      STACK_OPTIONS.PHP
    ]
  },
        {
    title: "Shares in Bitcoin",
    image: "https://i.ibb.co/ph6x1mq/2650401.jpg",
    description: "A page for viewing share prices in Bitcoin.",
    techStack: [
      STACK_OPTIONS.VUE,
      STACK_OPTIONS.NODE
    ]
  }
]

export { copy, projects }