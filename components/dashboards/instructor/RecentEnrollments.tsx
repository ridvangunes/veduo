import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const enrollments = [
  {
    name: "Ahmet Yılmaz",
    email: "ahmet@gmail.com",
    course: "React.js Eğitimi",
    amount: "+₺450.00",
    avatar: "AY",
    time: "2 saat önce",
  },
  {
    name: "Zeynep Kaya",
    email: "zeynep@hotmail.com",
    course: "Next.js Eğitimi",
    amount: "+₺550.00",
    avatar: "ZK",
    time: "5 saat önce",
  },
  {
    name: "Mehmet Demir",
    email: "mehmet@outlook.com",
    course: "Python Eğitimi",
    amount: "+₺600.00",
    avatar: "MD",
    time: "1 gün önce",
  },
  {
    name: "Ayşe Çelik",
    email: "ayse@gmail.com",
    course: "React.js Eğitimi",
    amount: "+₺450.00",
    avatar: "AÇ",
    time: "1 gün önce",
  },
  {
    name: "Can Baran",
    email: "can@yandex.com",
    course: "Next.js Eğitimi",
    amount: "+₺550.00",
    avatar: "CB",
    time: "2 gün önce",
  },
];

const RecentEnrollments = () => {
  return (
    <Card className="col-span-1 lg:col-span-1 border-border/50 shadow-sm h-full">
      <CardHeader>
        <CardTitle>Son Kayıtlar</CardTitle>
        <CardDescription>
          Kurslarınıza yapılan son öğrenci kayıtları.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {enrollments.map((enrollment, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                  {enrollment.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {enrollment.name}
                </p>
                <p
                  className="text-xs text-muted-foreground w-32 sm:w-40 truncate"
                  title={enrollment.course}
                >
                  {enrollment.course}
                </p>
              </div>
              <div className="ml-auto flex flex-col items-end">
                <div className="font-medium text-sm text-emerald-600">
                  {enrollment.amount}
                </div>
                <div className="text-xs text-muted-foreground">
                  {enrollment.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentEnrollments;
