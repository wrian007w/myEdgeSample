import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const para = document.createElement("p");
  para.innerText = "This is a paragraph";

  block.append(para);
}