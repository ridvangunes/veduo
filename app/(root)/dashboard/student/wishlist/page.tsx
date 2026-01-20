import StudentFavoritesHeader from "@/components/dashboards/student/favorites/StudentFavoritesHeader";
import StudentFavoritesFilter from "@/components/dashboards/student/favorites/StudentFavoritesFilter";
import StudentFavoritesList from "@/components/dashboards/student/favorites/StudentFavoritesList";

export default function StudentWishlistPage() {
  return (
    <div className="space-y-8">
      <StudentFavoritesHeader />
      <StudentFavoritesFilter />
      <StudentFavoritesList />
    </div>
  );
}
