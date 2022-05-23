import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface ISidebarProps {
  selectedGenreId: GenreResponseProps["id"];
  genres: GenreResponseProps[];
  handleClickButton: (genre_id: number) => void;
}

export function SideBar({
  selectedGenreId,
  genres,
  handleClickButton,
}: ISidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
