import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>List of projects will go here.</p>
      <ul>
        <li>
          <Link href="/projects/project-1">Project 1</Link>
        </li>
        <li>
          <Link href="/projects/project-2">Project 2</Link>
        </li>
        <li>
          <Link href="/projects/project-3">Project 3</Link>
        </li>
      </ul>
    </div>
  );
}
