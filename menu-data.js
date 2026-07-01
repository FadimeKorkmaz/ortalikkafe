const menuData = [
  // --- APERATİFLER ---
  { category: "aperatif", name: "Patates Kızartma", desc: "Weed sos ile beraber", price: "375₺" },
  { category: "aperatif", name: "Çıtır Tavuk Sepeti (150 gr)", desc: "Çıtır tavuk parçaları, patates kızartması, weed sos, isli sebze sos ile", price: "550₺" },
  { category: "aperatif", name: "Bira Tabağı", desc: "Izgara jumbo sosis, patates, weed sos, soğan halkası, çıtır tavuk", price: "725₺" },
  { category: "aperatif", name: "Peynir Tabağı", desc: "Eski kaşar, Ezine, top peynir, isli peynir, tulum, isli et, meyveler", price: "650₺" },
  { category: "aperatif", name: "Çıtır Jumbo Karides", desc: "Üç shooter tatlı acı sos, üç shooter weed sos ve karides", price: "595₺" },
  { category: "aperatif", name: "Börek Tabağı", desc: "Dört adet sigara böreği, patates kızartması ve mevsim yeşillikleri", price: "425₺" },

  // --- MAKARNALAR ---
  { category: "makarna", name: "Napoliten Fusilli", desc: "Fusilli makarna, domates sos, krema, fesleğen, parmesan", price: "495₺" },
  { category: "makarna", name: "Üç Renkli Tortellini", desc: "Ispanaklı, peynirli, domatesli tortellini; krema ve parmesan", price: "595₺" },
  { category: "makarna", name: "Mantarlı Fusilli", desc: "Kültür mantarı, istiridye mantarı, trüf mantarı, pesto sos, krema", price: "595₺" },
  { category: "makarna", name: "Carbonara Fusilli", desc: "Fusilli makarna, krema, pastırma, parmesan", price: "650₺" },

  // --- TAVUKLAR ---
  { category: "tavuk", name: "Pink Chicken", desc: "Tavuk göğüs, arpacık soğan, mantar, krema, domates sos, salata, patates", price: "625₺" },
  { category: "tavuk", name: "Schnitzel", desc: "Tavuk göğüs, patates kızartması, tereyağ, limon, salata", price: "725₺" },
  { category: "tavuk", name: "Çıtır Çubuk Kanat", desc: "Yaprak kanat, patates kızartması, weed sos", price: "650₺" },

  // --- BURGERLER ---
  { category: "burger", name: "Lucifer Burger", desc: "Burger köftesi (%70 dana %30 kuzu), chedar, soğan turşusu, pastırma, patates", price: "735₺" },
  { category: "burger", name: "Alpes Burger", desc: "Burger köftesi, füme dana eti, chedar, karamelize soğan, patates", price: "745₺" },

  // --- PİZZALAR ---
  { category: "pizza", name: "Margarita", desc: "Domates sos, mozarella peynir, fesleğen", price: "595₺" },
  { category: "pizza", name: "Full Beef", desc: "Domates sos, mozeralla, sucuk, pastırma, füme et, frenk biber", price: "765₺" },
  { category: "pizza", name: "Full Mixed", desc: "Domates sos, mozeralla, sucuk, jumbo sosis, mantar, mısır, zeytin", price: "725₺" },
  { category: "pizza", name: "Chef Special", desc: "Domates sos, mozeralla, chedar, füme et, istiridye mantarı, roka", price: "795₺" },

  // --- ETLER ---
  { category: "et", name: "Pirzola (300 gr)", desc: "Kuzu pirzola, tortilla, rokfor sos, fesleğenli patates püresi", price: "1.490₺" },
  { category: "et", name: "Lokum Bonfile (200 gr)", desc: "Dana bonfile, cafe de paris sos, baby patates, pancar, patates püresi", price: "1.450₺" },
  { category: "et", name: "Bonfile Kavurma Tava", desc: "Kaz başı bonfile, arpacık soğan, kapya ve köy biberi, patates püresi", price: "1.450₺" },

  // --- SALATALAR ---
  { category: "salata", name: "Izgara Bonfile Salata", desc: "Bonfile, mevsim yeşillikleri, çeri domates, mısır", price: "654₺" },
  { category: "salata", name: "Izgara Hellim Salata", desc: "Izgara hellim peyniri, yeşillik, çeri domates, mısır, sos", price: "495₺" },
  { category: "salata", name: "Tavuklu Sezar Salata", desc: "Yeşillik, çeri domates, sezar sos, ızgara tavuk, mısır, kıtır ekmek", price: "525₺" },
  { category: "salata", name: "Füme Somon Salata", desc: "Füme somon, mevsim yeşillikleri, çeri domates, mısır, sos", price: "545₺" },

  // --- BİRALAR ---
  { category: "bira", name: "Tuborg 50 cl Fıçı", desc: "", price: "275₺" },
  { category: "bira", name: "Tuborg 33 cl Fıçı", desc: "", price: "250₺" },
  { category: "bira", name: "Carlsberg 50 cl Fıçı", desc: "", price: "295₺" },
  { category: "bira", name: "Carlsberg 33 cl Fıçı", desc: "", price: "265₺" },
  { category: "bira", name: "Tuborg 50 cl Şişe", desc: "", price: "315₺" },
  { category: "bira", name: "Carlsberg 50 cl Şişe", desc: "", price: "325₺" },
  { category: "bira", name: "Carlsberg Elephant 50 cl Kutu", desc: "", price: "450₺" },
  { category: "bira", name: "Carlsberg Luna 50 cl Kutu", desc: "", price: "355₺" },
  { category: "bira", name: "Weihenstephane 33 cl", desc: "", price: "375₺" },
  { category: "bira", name: "Desperados 33 cl", desc: "", price: "395₺" },
  { category: "bira", name: "Sol 33 cl Şişe", desc: "", price: "395₺" },
  { category: "bira", name: "Blanc 33 cl Şişe", desc: "", price: "375₺" },
  { category: "bira", name: "Guinness 44 cl Kutu", desc: "", price: "445₺" },
  { category: "bira", name: "Tuborg Smooth 33 cl Şişe", desc: "", price: "315₺" },
  { category: "bira", name: "Tuborg Smooth 50 cl Kutu", desc: "", price: "345₺" },
  { category: "bira", name: "Bomonti Filtresiz 50 cl Şişe", desc: "", price: "315₺" },
  { category: "bira", name: "Efes Pilsen Yeni 50 cl Şişe", desc: "", price: "315₺" },
  { category: "bira", name: "Efes Lager Malt 50 cl Şişe", desc: "", price: "315₺" },
  { category: "bira", name: "Efes Pilsen Green 50 cl Şişe", desc: "", price: "325₺" },
  { category: "bira", name: "Miller 33 cl Şişe", desc: "", price: "375₺" },
  { category: "bira", name: "BUD 50 cl Şişe", desc: "", price: "390₺" },
  { category: "bira", name: "Stella Artois 44 cl Şişe", desc: "", price: "390₺" },
  { category: "bira", name: "BECK’S 50 cl Şişe", desc: "", price: "390₺" },
  { category: "bira", name: "Corona 33 cl Şişe", desc: "", price: "395₺" },
  { category: "bira", name: "Amsterdam 50 cl Şişe", desc: "", price: "475₺" },

  // --- VODKA ---
  { category: "vodka", name: "Absolut (Tek)", desc: "", price: "400₺" },
  { category: "vodka", name: "Absolut (Double)", desc: "", price: "700₺" },
  { category: "vodka", name: "Absolut 35 cl", desc: "Kuruyemiş ve meyve tabağı ikramımızdır.", price: "2.500₺" },
  { category: "vodka", name: "Absolut 70 cl", desc: "Kuruyemiş ve meyve tabağı ikramımızdır.", price: "4.750₺" },
  { category: "vodka", name: "Smirnoff (Tek)", desc: "", price: "400₺" },
  { category: "vodka", name: "Smirnoff (Double)", desc: "", price: "700₺" },
  { category: "vodka", name: "Smirnoff 35 cl", desc: "Kuruyemiş ve meyve tabağı ikramımızdır.", price: "2.500₺" },
  { category: "vodka", name: "Smirnoff 70 cl", desc: "Kuruyemiş ve meyve tabağı ikramımızdır.", price: "4.750₺" },
  { category: "vodka", name: "Finlandia (Tek)", desc: "", price: "400₺" },
  { category: "vodka", name: "Finlandia (Double)", desc: "", price: "700₺" },
  { category: "vodka", name: "Finlandia 70 cl", desc: "Kuruyemiş ve meyve tabağı ikramımızdır.", price: "4.750₺" },
  // --- CİN ---
  { category: "cin", name: "Gordons (Tek)", desc: "", price: "400₺" },
  { category: "cin", name: "Gordons (Double)", desc: "", price: "700₺" },
  { category: "cin", name: "Gordons 35 cl", desc: "Kuruyemiş ve meyve ikramımızdır.", price: "2.500₺" },
  { category: "cin", name: "Gordons 70 cl", desc: "Kuruyemiş, meyve tabağı ikramımızdır.", price: "4.750₺" },
  { category: "cin", name: "Beefeater (Tek)", desc: "", price: "400₺" },
  { category: "cin", name: "Beefeater (Double)", desc: "", price: "700₺" },
  { category: "cin", name: "Beefeater 70 cl", desc: "Kuruyemiş, meyve tabağı ikramımızdır.", price: "4.750₺" },
  { category: "cin", name: "Tanqueray Dry (Tek)", desc: "", price: "450₺" },
  { category: "cin", name: "Tanqueray Dry (Double)", desc: "", price: "800₺" },
  { category: "cin", name: "Tanqueray Dry 70 cl", desc: "Kuruyemiş, meyve tabağı ikramımızdır.", price: "5.450₺" },
  { category: "cin", name: "Tanqueray NO:10 70cl", desc: "Kuruyemiş, meyve tabağı ikramımızdır.", price: "7.250₺" },
  { category: "cin", name: "Bombay Sapphire 70cl", desc: "Kuruyemiş, meyve tabağı ikramımızdır.", price: "6.750₺" },
  
  
 // --- VİSKİLER ---
  { category: "viski", name: "Chivas Regal (Tek)", desc: "", price: "500₺" },
  { category: "viski", name: "Chivas Regal (Double)", desc: "", price: "900₺" },
  { category: "viski", name: "Chivas Regal 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "6.500₺" },
  { category: "viski", name: "Chivas 18 Years 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "13.500₺" },
  { category: "viski", name: "Red Label (Tek)", desc: "", price: "450₺" },
  { category: "viski", name: "Red Label (Double)", desc: "", price: "800₺" },
  { category: "viski", name: "Red Label 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "5.000₺" },
  { category: "viski", name: "Black Label (Tek)", desc: "", price: "500₺" },
  { category: "viski", name: "Black Label (Double)", desc: "", price: "900₺" },
  { category: "viski", name: "Black Label 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "6.000₺" },
  { category: "viski", name: "Jameson Black Barrel (Tek)", desc: "", price: "700₺" },
  { category: "viski", name: "Jameson Black Barrel (Double)", desc: "", price: "1.200₺" },
  { category: "viski", name: "Jameson Black Barrel 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "8.000₺" },
  { category: "viski", name: "Lagavulin 8 Years (Tek)", desc: "", price: "750₺" },
  { category: "viski", name: "Lagavulin 8 Years (Double)", desc: "", price: "1.300₺" },
  { category: "viski", name: "Lagavulin 8 Years 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "9.000₺" },
  { category: "viski", name: "Jack Daniels (Tek)", desc: "", price: "500₺" },
  { category: "viski", name: "Jack Daniels (Double)", desc: "", price: "900₺" },
  { category: "viski", name: "Jack Daniels 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "6.000₺" },
  { category: "viski", name: "Glenfiddich Single Malt 12YO 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "8.000₺" },
  { category: "viski", name: "Makers Mark 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "8.000₺" },
  { category: "viski", name: "Glenmorangie 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "7.500₺" },
  { category: "viski", name: "Monkey Shoulder 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "8.000₺" },
  { category: "viski", name: "Talisker 10 Years 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "9.000₺" },
  { category: "viski", name: "The Dalmore 12 Years 70 cl", desc: "Meyve tabağı, kuruyemiş, soft içecekler ikramımızdır.", price: "13.500₺" },
  
  
  // --- TEKİLA ---
  { category: "tekila", name: "Tekila Shot", desc: "Tekila Shotlarda 5 shota 1 shot ikramımızdır.", price: "300₺" },
  { category: "tekila", name: "Olmeca Gold 70 cl", desc: "", price: "5.500₺" },
  { category: "tekila", name: "Olmeca 70 cl", desc: "", price: "5.000₺" },
  { category: "tekila", name: "Sierra Gold 70 cl", desc: "", price: "5.500₺" },
  { category: "tekila", name: "Sierra 70 cl", desc: "", price: "5.000₺" },

  // --- LİKÖRLER ---
  { category: "likor", name: "Baileys (Tek)", desc: "", price: "450₺" },
  { category: "likor", name: "Kahlua (Tek)", desc: "", price: "450₺" },
  { category: "likor", name: "Cointreau (Tek)", desc: "", price: "450₺" },
  { category: "likor", name: "Campari (Tek)", desc: "", price: "450₺" },
  { category: "likor", name: "Drambuie (Tek)", desc: "", price: "450₺" },
  { category: "likor", name: "Jager Meister (Tek)", desc: "", price: "450₺" },
  { category: "likor", name: "Jager Meister 70 cl", desc: "", price: "5.750₺" },

  // --- VERMUTLAR ---
  { category: "vermut", name: "Martini Bianco (Tek)", desc: "", price: "450₺" },
  { category: "vermut", name: "Martini Extra Dry (Tek)", desc: "", price: "450₺" },
  { category: "vermut", name: "Martini Rosso (Tek)", desc: "", price: "450₺" },
  
  
  
 // --- ROM ---
  { category: "rom", name: "Captain Morgan Black (Tek)", desc: "", price: "450₺" },
  { category: "rom", name: "Captain Morgan Black (Double)", desc: "", price: "800₺" },
  { category: "rom", name: "Captain Morgan (Tek)", desc: "", price: "450₺" },
  { category: "rom", name: "Captain Morgan (Double)", desc: "", price: "800₺" },
  { category: "rom", name: "Bacardi (Tek)", desc: "", price: "450₺" },
  { category: "rom", name: "Bacardi (Double)", desc: "", price: "800₺" },

  // --- COGNAC ---
  { category: "cognac", name: "Martell (Tek)", desc: "", price: "500₺" },
  { category: "cognac", name: "Martell (Double)", desc: "", price: "900₺" },
  { category: "cognac", name: "Hennessy (Tek)", desc: "", price: "500₺" },
  { category: "cognac", name: "Hennessy (Double)", desc: "", price: "900₺" },
  { category: "cognac", name: "Remy Martin (Tek)", desc: "", price: "500₺" },
  { category: "cognac", name: "Remy Martin (Double)", desc: "", price: "900₺" },
  
  
  // --- ŞARAPLAR ---
  { category: "sarap", name: "Kırmızı Şarap (Kadeh)", desc: "", price: "550₺" },
  { category: "sarap", name: "Beyaz Şarap (Kadeh)", desc: "", price: "550₺" },
  { category: "sarap", name: "Rose Şarap (Kadeh)", desc: "", price: "550₺" },
  { category: "sarap", name: "Buzbağ Öküzgözü", desc: "", price: "2.950₺" },
  { category: "sarap", name: "Leona Blush", desc: "", price: "2.950₺" },
  { category: "sarap", name: "Merlot", desc: "", price: "2.950₺" },
  { category: "sarap", name: "Probus", desc: "", price: "2.950₺" },
  { category: "sarap", name: "Yakut", desc: "", price: "2.950₺" },
  { category: "sarap", name: "Çankaya", desc: "", price: "2.950₺" },
 
 
  // --- KOKTEYLLER ---
  { category: "kokteyl", name: "Long Island Ice Tea", desc: "", price: "750₺" },
  { category: "kokteyl", name: "Adios M.F", desc: "", price: "750₺" },
  { category: "kokteyl", name: "Sex On The Beach", desc: "", price: "650₺" },
  { category: "kokteyl", name: "Mojito", desc: "", price: "700₺" },
  { category: "kokteyl", name: "Cuba Libre", desc: "", price: "700₺" },
  { category: "kokteyl", name: "Lynchburg Lemonade", desc: "", price: "750₺" },
  { category: "kokteyl", name: "Margarita", desc: "", price: "600₺" },
  { category: "kokteyl", name: "Gin Fizz", desc: "", price: "600₺" },
  { category: "kokteyl", name: "Pinacolada", desc: "", price: "700₺" },
  { category: "kokteyl", name: "Tekila Sunrise", desc: "", price: "650₺" },
  { category: "kokteyl", name: "Cosmopolitan", desc: "", price: "650₺" },
  { category: "kokteyl", name: "Negroni", desc: "", price: "750₺" },
  { category: "kokteyl", name: "Whisky Soure", desc: "", price: "800₺" },
  { category: "kokteyl", name: "Espresso Martini", desc: "", price: "700₺" },
  { category: "kokteyl", name: "B-52", desc: "", price: "650₺" },
  { category: "kokteyl", name: "Aperol Spritz", desc: "", price: "600₺" },
  { category: "kokteyl", name: "Basillica", desc: "", price: "650₺" },
  { category: "kokteyl", name: "Vflower", desc: "", price: "650₺" },

  // --- RAKILAR ---
  { category: "raki", name: "Yeni Rakı 35 cl", desc: "", price: "2.150₺" },
  { category: "raki", name: "Yeni Rakı 70 cl", desc: "", price: "3.650₺" },
  { category: "raki", name: "Yeni Rakı Yeni Seri 35 cl", desc: "", price: "2.450₺" },
  { category: "raki", name: "Yeni Rakı Yeni Seri 70 cl", desc: "", price: "3.950₺" },
  { category: "raki", name: "Yeni Rakı Ala 35 cl", desc: "", price: "2.850₺" },
  { category: "raki", name: "Yeni Rakı Ala 70 cl", desc: "", price: "5.000₺" },
  { category: "raki", name: "Tekirdağ 35 cl", desc: "", price: "2.200₺" },
  { category: "raki", name: "Tekirdağ 70 cl", desc: "", price: "3.800₺" },
  { category: "raki", name: "Tekirdağ Altın Seri 35 cl", desc: "", price: "2.700₺" },
  { category: "raki", name: "Tekirdağ Altın Seri 70 cl", desc: "", price: "4.650₺" },
  { category: "raki", name: "Tekirdağ Göbek 35 cl", desc: "", price: "2.900₺" },
  { category: "raki", name: "Tekirdağ Göbek 70 cl", desc: "", price: "5.000₺" },
  { category: "raki", name: "Efe Yaş Üzüm 35 cl", desc: "", price: "2.700₺" },
  { category: "raki", name: "Efe Yaş Üzüm 70 cl", desc: "", price: "4.650₺" },
  { category: "raki", name: "Efe Gold 35 cl", desc: "", price: "2.850₺" },
  { category: "raki", name: "Efe Gold 70 cl", desc: "", price: "4.950₺" },
  { category: "raki", name: "Efe Göbek 35 cl", desc: "", price: "2.750₺" },
  { category: "raki", name: "Efe Göbek 70 cl", desc: "", price: "4.850₺" },
  { category: "raki", name: "Beylerbeyi Göbek 35 cl", desc: "", price: "2.950₺" },
  { category: "raki", name: "Beylerbeyi Göbek 70 cl", desc: "", price: "5.450₺" },
  
  
  // --- SICAK İÇECEKLER ---
  { category: "sicak-icecek", name: "Çay", desc: "", price: "90₺" },
  { category: "sicak-icecek", name: "Türk Kahvesi", desc: "", price: "175₺" },
  { category: "sicak-icecek", name: "Espresso", desc: "", price: "175₺" },
  { category: "sicak-icecek", name: "Americano", desc: "", price: "200₺" },
  { category: "sicak-icecek", name: "Latte", desc: "", price: "225₺" },
  { category: "sicak-icecek", name: "Cappuccino", desc: "", price: "245₺" },

  // --- MEŞRUBATLAR ---
  { category: "mesrubat", name: "Coca Cola", desc: "", price: "150₺" },
  { category: "mesrubat", name: "Sprite", desc: "", price: "150₺" },
  { category: "mesrubat", name: "Fanta", desc: "", price: "150₺" },
  { category: "mesrubat", name: "Schweppes", desc: "", price: "175₺" },
  { category: "mesrubat", name: "Ice Tea", desc: "", price: "150₺" },
  { category: "mesrubat", name: "Sıkma Portakal Suyu", desc: "", price: "275₺" },
  { category: "mesrubat", name: "Redbull", desc: "", price: "300₺" },
  { category: "mesrubat", name: "Soda", desc: "", price: "100₺" },
  { category: "mesrubat", name: "Su", desc: "", price: "90₺" },
  
  
  // --- MEZELER ---
  { category: "meze", name: "Haydari 2 Kişilik", desc: "", price: "200₺" },
  { category: "meze", name: "Haydari 4 Kişilik", desc: "", price: "300₺" },
  { category: "meze", name: "Havuç Tarator 2 Kişilik", desc: "", price: "250₺" },
  { category: "meze", name: "Havuç Tarator 4 Kişilik", desc: "", price: "400₺" },
  { category: "meze", name: "Atom 2 Kişilik", desc: "", price: "250₺" },
  { category: "meze", name: "Atom 4 Kişilik", desc: "", price: "400₺" },
  { category: "meze", name: "Yoğurtlu Semizotu 2 Kişilik", desc: "", price: "200₺" },
  { category: "meze", name: "Yoğurtlu Semizotu 4 Kişilik", desc: "", price: "300₺" },
  { category: "meze", name: "Şakşuka 2 Kişilik", desc: "", price: "250₺" },
  { category: "meze", name: "Şakşuka 4 Kişilik", desc: "", price: "400₺" },
  { category: "meze", name: "Köpoğlu 2 Kişilik", desc: "", price: "250₺" },
  { category: "meze", name: "Köpoğlu 4 Kişilik", desc: "", price: "400₺" },

  // --- ÇEREZLER ---
  { category: "cerez", name: "Turşu", desc: "", price: "95₺" },
  { category: "cerez", name: "Tuzlu Fıstık", desc: "", price: "150₺" },
  { category: "cerez", name: "Lüks Çerez", desc: "", price: "325₺" }
];