
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const AnimalCard = ({ 
  title, 
  description, 
  imageUrl, 
  latinName 
}: { 
  title: string, 
  description: string, 
  imageUrl: string, 
  latinName: string 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border-blue-100 h-full">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="italic text-blue-700">{latinName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const animals = [
    {
      title: "Императорский пингвин",
      latinName: "Aptenodytes forsteri",
      description: "Самый крупный вид пингвинов, достигающий роста до 122 см и веса до 45 кг. Эти удивительные птицы выводят потомство в суровых зимних условиях Антарктиды при температуре до -60°C.",
      imageUrl: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?q=80&w=1000"
    },
    {
      title: "Морской леопард",
      latinName: "Hydrurga leptonyx",
      description: "Один из главных хищников Антарктиды. Имеет обтекаемое мощное тело длиной до 3,5 м. Питается пингвинами, другими тюленями и рыбой. Морской леопард известен своей агрессивностью и скоростью в воде.",
      imageUrl: "https://images.unsplash.com/photo-1589634749000-1ad2e9657331?q=80&w=1000"
    },
    {
      title: "Синий кит",
      latinName: "Balaenoptera musculus",
      description: "Самое крупное животное на Земле, достигающее длины 33 метров и веса 150 тонн. Летом синие киты мигрируют к водам Антарктиды, где питаются крилем — маленькими ракообразными, которых отфильтровывают своим огромным ртом.",
      imageUrl: "https://images.unsplash.com/photo-1566481628655-83414bd0db7d?q=80&w=1000"
    },
    {
      title: "Тюлень Уэдделла",
      latinName: "Leptonychotes weddellii",
      description: "Тюлень Уэдделла известен своей способностью нырять на глубину до 600 метров и оставаться под водой более часа. Они могут пробивать лед своими зубами, чтобы создать отверстия для дыхания.",
      imageUrl: "https://images.unsplash.com/photo-1566486546736-56c2ef2b4dc1?q=80&w=1000"
    },
    {
      title: "Антарктический криль",
      latinName: "Euphausia superba",
      description: "Небольшие ракообразные длиной до 6 см, составляющие основу пищевой цепи Антарктики. Биомасса криля оценивается в 500 миллионов тонн, что делает его одним из самых многочисленных видов на планете.",
      imageUrl: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1000"
    },
    {
      title: "Буревестник снежный",
      latinName: "Pagodroma nivea",
      description: "Небольшая морская птица с полностью белым оперением, что помогает ей маскироваться на фоне снега и льда. Одна из немногих птиц, гнездящихся в глубине Антарктиды, способна летать при очень сильных ветрах.",
      imageUrl: "https://images.unsplash.com/photo-1573582718756-d44e7685acc2?q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Хедер */}
      <header className="relative h-screen max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1516444843412-4214793d78b3?q=80&w=2000" 
          alt="Антарктида" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-montserrat">
            Мир Антарктиды
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-noto">
            Познакомьтесь с удивительными животными, обитающими в самом холодном 
            уголке нашей планеты
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent z-10"></div>
      </header>

      {/* Вводный текст */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 font-montserrat">
            Уникальная фауна ледяного континента
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-noto">
            Антарктида — самый холодный, ветреный и сухой континент на Земле. Несмотря на суровые условия, 
            здесь сформировалась уникальная экосистема, в которой обитают животные, 
            приспособившиеся к экстремальным условиям. Морские глубины вокруг Антарктиды богаты 
            жизнью благодаря обилию питательных веществ и кислорода в холодной воде.
          </p>
          <Separator className="max-w-md mx-auto bg-blue-200" />
        </div>
      </section>

      {/* Карточки с животными */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center font-montserrat">
          Животные Антарктиды
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <AnimalCard 
              key={index}
              title={animal.title}
              latinName={animal.latinName}
              description={animal.description}
              imageUrl={animal.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Блок с фактами */}
      <section className="bg-blue-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            Интересные факты об Антарктиде
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-full shrink-0">
                <Icon name="Thermometer" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Экстремальный холод</h3>
                <p className="text-blue-100 font-noto">Самая низкая зарегистрированная температура на Земле (-89,2°C) была зафиксирована на станции Восток в Антарктиде.</p>
              </div>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-full shrink-0">
                <Icon name="Droplets" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Запасы пресной воды</h3>
                <p className="text-blue-100 font-noto">Антарктида содержит около 70% всей пресной воды планеты в виде льда, что делает её крупнейшим резервуаром пресной воды на Земле.</p>
              </div>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-500 p-3 rounded-full shrink-0">
                <Icon name="Wind" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Сильнейшие ветра</h3>
                <p className="text-blue-100 font-noto">В некоторых прибрежных районах Антарктиды скорость ветра может достигать 320 км/ч, что делает их самыми ветреными местами на планете.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-noto">© 2024 Мир Антарктиды. Все права защищены.</p>
            <p className="text-blue-300 mt-2 font-noto text-sm">
              Создано с любовью к природе и её удивительным обитателям
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
