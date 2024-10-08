// Dữ liệu mẫu cho các ảnh
const images = [
    {
        src: "https://i.ibb.co/n6Y4ZMB/Next-Door-Studios-Roman-Todd-Michael-Del-Ray.jpg",
        name: "[20240817] NextDoor Studios - Roman Todd & Michael Del Ray",
        downloadLink: "https://10gb.vn/12kp56660yxw.html"
    },
	{
        src: "https://i.ibb.co/xSvm15n/Cocky-Boys-Aiden-Ward-Oliver-Carter.jpg",
        name: "[20240817] Cocky Boys - Aiden Ward & Oliver Carter",
        downloadLink: "https://10gb.vn/7dhjwmrko3ym.html"
    },
	{
        src: "https://i.ibb.co/QMv6rXZ/OF-Lobo-Carreira-Bastian-Karim.jpg",
        name: "[20240817] OF - Lobo Carreira & Bastian Karim",
        downloadLink: "https://10gb.vn/iolfu33e6o6c.html"
    },
	{
        src: "https://i.ibb.co/M54wHFS/OF-Martins-22cm-Johnny-Pe-Franco-Simon.jpg",
        name: "[20240817] OF - Martins 22cm, Johnny Pe, Franco & Simon",
        downloadLink: "https://10gb.vn/3ywxoa5jrvcc.html"
    },
	{
        src: "https://i.ibb.co/Qbmy8tt/VOYR-Valney-Chocolate-Caio-Rodrigues.jpg",
        name: "[20240817] VOYR - Valney Chocolate & Caio Rodrigues",
        downloadLink: "https://10gb.vn/bdsld00n8ust.html"
    },
	{
        src: "https://i.ibb.co/nnMFQsr/Meninos-Online-Jo-ozinho-Lucas-Ferrari-C-ssio-Baumanm.jpg",
        name: "[20240817] Meninos Online - Joãozinho, Lucas Ferrari & Cássio Baumanm",
        downloadLink: "https://10gb.vn/k299t7nnjvbd.html"
    },
	{
        src: "https://i.ibb.co/CBdb4Pk/OF-Dave-Wikkinson-Angel-Gomez-Lucho-Gonzalez-Mateo-Rivillio.jpg",
        name: "[20240817] OF - Dave Wikkinson, Angel Gomez, Lucho Gonzalez & Mateo Rivillio",
        downloadLink: "https://10gb.vn/u1ogjlzw0f5y.html"
    },
	{
        src: "https://i.ibb.co/6tq4LST/OF-Magic-Mike-Hung-Raj.jpg",
        name: "[20240817] OF - Magic Mike Hung & Raj",
        downloadLink: "https://10gb.vn/pa7kthl4xf9y.html"
    },
	{
        src: "https://i.ibb.co/ZhLbh5m/OF-Morgxn-Thicke-Kyle-Denton.jpg",
        name: "[20240817] OF - Morgxn Thicke & Kyle Denton",
        downloadLink: "https://10gb.vn/0qjvwz43ox57.html"
    },
	{
        src: "https://i.ibb.co/YLgFPJJ/Titan-Men-Junior-Stellano-Steven-Daigle-Tom-Wolfe.jpg",
        name: "[20240817] Titan Men - Junior Stellano, Steven Daigle & Tom Wolfe",
        downloadLink: "https://10gb.vn/rb7d54mttjtf.html"
    },
	{
        src: "https://i.ibb.co/stPXXg8/XVideos-RED-Tiago-Gaucho-Silver-New-Grey.jpg",
        name: "[20240817] XVideos RED - Tiago Gaucho & SilverNewGrey",
        downloadLink: "https://10gb.vn/2j3m2gh8i296.html"
    },
	{
        src: "https://i.ibb.co/wsdbJSc/Sticky-Rub-Say-Uncle-Derek-Allen-Jace-Starr.jpg",
        name: "[20240817] Sticky Rub (Say Uncle) - Derek Allen & Jace Starr",
        downloadLink: "https://10gb.vn/0a8er48qn91n.html"
    },
	{
        src: "https://i.ibb.co/KmYhZG6/ASG-Max-Jayden-Marcos-Joseph-Hart.jpg",
        name: "[20240818] ASG Max - Jayden Marcos & Joseph Hart",
        downloadLink: "https://10gb.vn/em9o6hipu9uz.html"
    },
	{
        src: "https://i.ibb.co/4S4BcX4/Cocky-Boys-Dillon-Faze-Jordan-Starr.jpg",
        name: "[20240818] Cocky Boys - Dillon Faze & Jordan Starr",
        downloadLink: "https://10gb.vn/1jwdf6taxp6g.html"
    },
	{
        src: "https://i.ibb.co/Y2WNhDV/Men-At-Play-Guillaume-Wayne-Ricky-Hard.jpg",
        name: "[20240818] MenAtPlay - Guillaume Wayne & Ricky Hard",
        downloadLink: "https://10gb.vn/ac6ziioqjtb2.html"
    },
	{
        src: "https://i.ibb.co/VxFjDZW/Naked-Sword-Damian-Night-Ro-Reyes.jpg",
        name: "[20240818] Naked Sword - Damian Night & Ro Reyes",
        downloadLink: "https://10gb.vn/4b86xuyi32sa.html"
    },
	{
        src: "https://i.ibb.co/56xsJMD/OF-Andre-Pijote-Eric-Rey.jpg",
        name: "[20240818] OF - Andre Pijote & Eric Rey",
        downloadLink: "https://10gb.vn/rk3qooayz024.html"
    },
	{
        src: "https://i.ibb.co/TWrDN9M/OF-Cole-Connor-Felipe-Ferro-Jose-Quevedo.jpg",
        name: "[20240818] OF - Cole Connor, Felipe Ferro & Jose Quevedo",
        downloadLink: "https://10gb.vn/0r3l5fvk4joq.html"
    },
	{
        src: "https://i.ibb.co/MNttCNp/OF-Daddy-XXXL-Bastian-Karim.jpg",
        name: "[20240818] OF - DaddyXXXL & Bastian Karim",
        downloadLink: "https://10gb.vn/i8mrecbkhigb.html"
    },
	{
        src: "https://i.ibb.co/sJcKfJ4/OF-Leo-Bumstead-Manuel-Skye.jpg",
        name: "[20240818] OF - Leo Bumstead & Manuel Skye",
        downloadLink: "https://10gb.vn/41sfvkzaggie.html"
    },
	{
        src: "https://i.ibb.co/pbYsTPT/OF-Nick-Butler-Beau-Butler-Halif-Faruk.jpg",
        name: "[20240818] OF - Nick Butler, Beau Butler & Halif Faruk",
        downloadLink: "https://10gb.vn/xl3dvdoouyfw.html"
    },
	{
        src: "https://i.ibb.co/g7bF7Cr/OF-Scott-Wild-Luciano.jpg",
        name: "[20240818] OF - Scott Wild & Luciano",
        downloadLink: "https://10gb.vn/pf60lys6lt0y.html"
    },
	{
        src: "https://i.ibb.co/gTk8B9Q/VOYR-Marlon-Costa-Valney-Chocolate.jpg",
        name: "[20240818] VOYR - Marlon Costa & Valney Chocolate",
        downloadLink: "https://10gb.vn/4sn6dv5m8uar.html"
    },
	{
        src: "https://i.ibb.co/0y7JGYd/MEN-Ashton-Summers-Reese-Rideout-Shamu-Azizam.jpg",
        name: "[20240821] MEN - Ashton Summers, Reese Rideout & Shamu Azizam",
        downloadLink: "https://10gb.vn/0g7ohjz0uokv.html"
    },
	{
        src: "https://i.ibb.co/CJnBzfG/OF-Viktor-Onee-Marco-Maxxx-Tomy-Stark.jpg",
        name: "[20240821] OF - ViktorOnee, Marco Maxxx & Tomy Stark",
        downloadLink: "https://10gb.vn/5vlp1ll560ic.html"
    },
	{
        src: "https://i.ibb.co/r2VFjNF/Randy-Blue-Abele-Place-Jake-Davis.jpg",
        name: "[20240821] Randy Blue - Abele Place & Jake Davis",
        downloadLink: "https://10gb.vn/r1lg6z0th0rw.html"
    },
	{
        src: "https://i.ibb.co/P1zhn0j/Eric-Videos-Samuel-Decker-Dimitri-Venum.jpg",
        name: "[20240821] Eric Videos - Samuel Decker & Dimitri Venum",
        downloadLink: "https://10gb.vn/acfhakw2et5c.html"
    },
	{
        src: "https://i.ibb.co/TwmQV3G/OF-Caio-Rodrigues-Gael-k-Riok-Andrey-Cam.jpg",
        name: "[20240821] OF - Caio Rodrigues, Gael kRiok & Andrey Cam",
        downloadLink: "https://10gb.vn/d2hola0hpm57.html"
    },
	{
        src: "https://i.ibb.co/VtJ2w41/OF-Ruslan-Angelo-Joshua-Mateo-Jack-Wolf.jpg",
        name: "[20240821] OF - Ruslan Angelo, Joshua Mateo & Jack Wolf",
        downloadLink: "https://10gb.vn/4xpb478l15th.html"
    },
	{
        src: "https://i.ibb.co/Q7VJ6x1/OF-Sean-Xavier-Casey-Cruz.jpg",
        name: "[20240821] OF - Sean Xavier & Casey Cruz",
        downloadLink: "https://10gb.vn/ahrzkm73j2zy.html"
    },
	{
        src: "https://i.ibb.co/NF0XZ3j/VOYR-Andy-Rodrigues-Boe-Jack-Ryan.jpg",
        name: "[20240821] VOYR - Andy Rodrigues & Boe Jack Ryan",
        downloadLink: "https://10gb.vn/as2ys3zqf6xw.html"
    },
	{
        src: "https://i.ibb.co/JtFyBbR/XVideos-RED-Davi-Lobo-The-Daddy-Finger-Sexystache.jpg",
        name: "[20240821] XVideos RED - Davi Lobo, The Daddy Finger & Sexystache",
        downloadLink: "https://10gb.vn/xaawmuc7i78l.html"
    },
	{
        src: "https://i.ibb.co/9NvD53s/Bromo-Troy-Daniels-John-Brachalli.jpg",
        name: "[20240821] Bromo - Troy Daniels & John Brachalli",
        downloadLink: "https://10gb.vn/p5gimk321zp8.html"
    },
	{
        src: "https://i.ibb.co/pLM1q1v/Cutlers-Den-Boy-David-Texas-Bull.jpg",
        name: "[20240821] CutlersDen - Boy David & Texas Bull",
        downloadLink: "https://10gb.vn/fkc9vjx5vo6g.html"
    },
	{
        src: "https://i.ibb.co/1X8HY1F/Men-Over-30-Hunter-Vance-Max-Romano.jpg",
        name: "[20240821] Men Over 30 - Hunter Vance & Max Romano",
        downloadLink: "https://10gb.vn/86usiowz83in.html"
    },
	{
        src: "https://i.ibb.co/B46Vp6V/OF-Griffin-Barrows-Colby-Melvin-Xavier-Robitaille.jpg",
        name: "[20240821] OF - Griffin Barrows, Colby Melvin & Xavier Robitaille",
        downloadLink: "https://10gb.vn/8t15afvvetk7.html"
    },
	{
        src: "https://i.ibb.co/1fvRwFD/OF-Mateo-Muscle-Trophy-Muscle.jpg",
        name: "[20240821] OF - Mateo Muscle & Trophy Muscle",
        downloadLink: "https://10gb.vn/gdvgd9b1iep4.html"
    },
	{
        src: "https://i.ibb.co/HKjRcTn/OF-Reign-Bruno-Bernal.jpg",
        name: "[20240821] OF - Reign & Bruno Bernal",
        downloadLink: "https://10gb.vn/qjzk6q4wlszq.html"
    },
	{
        src: "https://i.ibb.co/5RRwZ2f/OF-Thomas-Johnson-Mr-Deep-Voice-Sebastian-Stutzlein.jpg",
        name: "[20240821] OF - Thomas Johnson (MrDeepVoice) & Sebastian Stutzlein",
        downloadLink: "https://10gb.vn/s36wl371ny1z.html"
    },
	{
        src: "https://i.ibb.co/gjqYmj9/Pig-Bottoms-Vincent-O-Reilly-Myhyem-M-Jordyn-Ty-Santana-Kyle-Michaels.jpg",
        name: "[20240821] Pig Bottoms - Vincent O'Reilly, Myhyem M Jordyn, Ty Santana & Kyle Michaels",
        downloadLink: "https://10gb.vn/v8omc4kywc3v.html"
    },
	{
        src: "https://i.ibb.co/f9S6mGB/Randy-Blue-Alex-Kof-Daniel-Evans.jpg",
        name: "[20240821] Randy Blue - Alex Kof & Daniel Evans",
        downloadLink: "https://10gb.vn/69z0leis5c25.html"
    },
	{
        src: "https://i.ibb.co/DkkrHfK/Next-Door-Studios-Jayden-Marcos-Kyle-Fletcher.jpg",
        name: "[20240821] NextDoor Studios - Jayden Marcos & Kyle Fletcher",
        downloadLink: "https://10gb.vn/4o5qnqewl0hz.html"
    },
	{
        src: "https://i.ibb.co/09f0nWK/OF-Alex-Marte-PJ-Knox-Beau-Butler.jpg",
        name: "[20240821] OF - Alex Marte, PJ Knox & Beau Butler",
        downloadLink: "https://10gb.vn/bygxchcr2skf.html"
    },
	{
        src: "https://i.ibb.co/L952ZnK/OF-Sean-Xavier-Derek-Kage-Boy-in-Blue-XXX.jpg",
        name: "[20240821] OF - Sean Xavier, Derek Kage & Boy in Blue XXX",
        downloadLink: "https://10gb.vn/dzyf9fciud3m.html"
    },
	{
        src: "https://i.ibb.co/DYpPYD2/The-Guy-Site-Danny-Parker-Nick-Cranston.jpg",
        name: "[20240821] The Guy Site - Danny Parker & Nick Cranston",
        downloadLink: "https://10gb.vn/aubxo5hc3ahi.html"
    },
	{
        src: "https://i.ibb.co/yFkK7v5/VOYR-Gabriel-Coimbra-Rhyheim-Shabazz.jpg",
        name: "[20240821] VOYR - Gabriel Coimbra & Rhyheim Shabazz",
        downloadLink: "https://10gb.vn/atwhlz97t1jt.html"
    },
	{
        src: "https://i.ibb.co/b7ZF3Nk/Bro-Network-Ryan-Bones-Papi-Santiago.jpg",
        name: "[20240822] BroNetwork - Ryan Bones & Papi Santiago",
        downloadLink: "https://10gb.vn/bxl4ozdz49ve.html"
    },
	{
        src: "https://i.ibb.co/p67z5DD/Cocky-Boys-Angel-Elias-Seth-Cain.jpg",
        name: "[20240822] Cocky Boys - Angel Elias & Seth Cain",
        downloadLink: "https://10gb.vn/2kbtjzovv5e5.html"
    },
	{
        src: "https://i.ibb.co/2596NBW/Men-At-Play-Allen-King-Luciano.jpg",
        name: "[20240822] MenAtPlay - Allen King & Luciano",
        downloadLink: "https://10gb.vn/45ejabhoodc0.html"
    },
	{
        src: "https://i.ibb.co/gvcfjPt/Naked-Sword-Beau-Butler-Sumner-Blayne.jpg",
        name: "[20240822] Naked Sword - Beau Butler & Sumner Blayne",
        downloadLink: "https://10gb.vn/va5pslp7urol.html"
    },
	{
        src: "https://i.ibb.co/X5wMJ87/OF-Caio-Rodrigues-Rosilva.jpg",
        name: "[20240822] OF - Caio Rodrigues & Rosilva",
        downloadLink: "https://10gb.vn/8efgtb1kwgys.html"
    },
	{
        src: "https://i.ibb.co/rmKyRKW/OF-Chaka-Of-Paradise-Chuck-Conrad.jpg",
        name: "[20240822] OF - Chaka Of Paradise & Chuck Conrad",
        downloadLink: "https://10gb.vn/182ii7pz1ue0.html"
    },
	{
        src: "https://i.ibb.co/h9DpBXx/OF-Halif-Faruk-Viktor-Rom.jpg",
        name: "[20240822] OF - Halif Faruk & Viktor Rom",
        downloadLink: "https://10gb.vn/0ideu3d7bsxj.html"
    },
	{
        src: "https://i.ibb.co/j8jbVZL/OF-Klebert-Fernandes-Pedro-Rocha.jpg",
        name: "[20240822] OF - Klebert Fernandes & Pedro Rocha",
        downloadLink: "https://10gb.vn/pkls3f73w0g5.html"
    },
	{
        src: "https://i.ibb.co/wN3nL1M/OF-Matthew-Ellis-Hung-Skater.jpg",
        name: "[20240822] OF - Matthew Ellis & Hung Skater",
        downloadLink: "https://10gb.vn/bl4s4rfgykhy.html"
    },
	{
        src: "https://i.ibb.co/GF33tfc/Sean-Cody-Daniel-Danny-Fantasy.jpg",
        name: "[20240822] Sean Cody - Daniel & Danny Fantasy",
        downloadLink: "https://10gb.vn/ljdlqdelqvf0.html"
    },
	{
        src: "https://i.ibb.co/TgpfkY1/Bait-Buddies-Riley-Mitchel-Christian-David-Mitchel.jpg",
        name: "[20240822] Bait Buddies - Riley Mitchel & Christian (David Mitchel)",
        downloadLink: "https://10gb.vn/pkethydqxrcz.html"
    },
	{
        src: "https://i.ibb.co/JdgBJsP/Chaos-Men-Valentin-Petrov-Brock-Banks.jpg",
        name: "[20240822] ChaosMen - Valentin Petrov & Brock Banks",
        downloadLink: "https://10gb.vn/nav2aoixc1tk.html"
    },
	{
        src: "https://i.ibb.co/DKNff5Q/Falcon-Studios-Joseph-Hart-Baxxx-Baxter-Linn.jpg",
        name: "[20240822] Falcon Studios - Joseph Hart & Baxxx (Baxter Linn)",
        downloadLink: "https://10gb.vn/hkdyyqutirc8.html"
    },
	{
        src: "https://i.ibb.co/0FMR3ym/Kristen-Bjorn-John-Rodriguez-Gianni-Gio.jpg",
        name: "[20240822] Kristen Bjorn - John Rodriguez & Gianni Gio",
        downloadLink: "https://10gb.vn/qozdgwokkgye.html"
    },
	{
        src: "https://i.ibb.co/BrYQ6hF/OF-Diego-Sans-Roger-Monzon.jpg",
        name: "[20240822] OF - Diego Sans & Roger Monzon",
        downloadLink: "https://10gb.vn/nu0rdfmn6mjr.html"
    },
	{
        src: "https://i.ibb.co/dgrrkXp/OF-Ice-Man-JB-Dr-One-Dik-Ben.jpg",
        name: "[20240822] OF - IceManJB, DrOneDik & Ben",
        downloadLink: "https://10gb.vn/1qsenbbakuxi.html"
    },
	{
        src: "https://i.ibb.co/bFb7H2S/OF-Matthew-Ellis-Hung-Skater.jpg",
        name: "[20240822] OF - Matthew Ellis & Hung Skater",
        downloadLink: "https://10gb.vn/k220lcudrft1.html"
    },
	{
        src: "https://i.ibb.co/nkMjm6P/OF-Pedro-Rocha-Klebert-Fernandes-Enzo-Nery.jpg",
        name: "[20240822] OF - Pedro Rocha, Klebert Fernandes & Enzo Nery",
        downloadLink: "https://10gb.vn/z2vqel7543ul.html"
    },
	{
        src: "https://i.ibb.co/P957DRW/Raging-Stallion-Studios-Drew-Valentino-Sean-Xavier-Bruce-Jones-Grayden-Hall.jpg",
        name: "[20240822] Raging Stallion Studios - Drew Valentino, Sean Xavier, Bruce Jones & Grayden Hall",
        downloadLink: "https://10gb.vn/xalkuyzwuh22.html"
    },
	{
        src: "https://i.ibb.co/jWN55sz/The-Guy-Site-Ed-Brook-Angelo.jpg",
        name: "[20240822] The Guy Site - Ed Brook & Angelo",
        downloadLink: "https://10gb.vn/yhqgsw85d8hy.html"
    },
	{
        src: "https://i.ibb.co/qNgV2J0/Corbin-Fisher-Max-Beau.jpg",
        name: "[20240823] Corbin Fisher - Max & Beau",
        downloadLink: "https://10gb.vn/isfjmri6issv.html"
    },
	{
        src: "https://i.ibb.co/tQTtLmc/OF-Cade-Maddox-Angel-Elias.jpg",
        name: "[20240823] OF - Cade Maddox & Angel Elias",
        downloadLink: "https://10gb.vn/pcdm82eu7zow.html"
    },
	{
        src: "https://i.ibb.co/njX1hgn/Corbin-Fisher-Dylan-Rocky.jpg",
        name: "[20240826] Corbin Fisher - Dylan & Rocky",
        downloadLink: "https://10gb.vn/fuvqe055t52u.html"
    },
	{
        src: "https://i.ibb.co/26xGjMs/Cutlers-Den-Cutler-X-Derek-Kage.jpg",
        name: "[20240826] CutlersDen - Cutler X & Derek Kage",
        downloadLink: "https://10gb.vn/6t4jfyn7721m.html"
    },
	{
        src: "https://i.ibb.co/gwrWH4F/Latin-Boyz-Juliano-Angelo.jpg",
        name: "[20240826] Latin Boyz - Juliano & Angelo",
        downloadLink: "https://10gb.vn/94y93vf5mtet.html"
    },
	{
        src: "https://i.ibb.co/SQ33PKn/Lucas-Entertainment-Ridick-Rudy-Gram.jpg",
        name: "[20240826] Lucas Entertainment - Ridick & Rudy Gram",
        downloadLink: "https://10gb.vn/t4b272kkovmg.html"
    },
	{
        src: "https://i.ibb.co/K2rwNNT/MEN-Chuck-Conrad-Jake-Waters.jpg",
        name: "[20240826] MEN - Chuck Conrad & Jake Waters",
        downloadLink: "https://10gb.vn/h40oi2vsl06x.html"
    },
	{
        src: "https://i.ibb.co/9GxbYQq/MEN-Scott-Carter-Malik-Delgaty.jpg",
        name: "[20240826] MEN - Scott Carter & Malik Delgaty",
        downloadLink: "https://10gb.vn/nkpgy5rmo1cg.html"
    },
	{
        src: "https://i.ibb.co/5RnNzsf/Naked-Sword-VOYR-Gabriel-Coimbra-Lucas-Dias.jpg",
        name: "[20240826] Naked Sword + VOYR - Gabriel Coimbra & Lucas Dias",
        downloadLink: "https://10gb.vn/vmjr4vo4k6hi.html"
    },
	{
        src: "https://i.ibb.co/PTX236W/Next-Door-Studios-Grant-Ducati-Kam-Stone.jpg",
        name: "[20240826] NextDoor Studios - Grant Ducati & Kam Stone",
        downloadLink: "https://10gb.vn/b7kq2l64hyx5.html"
    },
	{
        src: "https://i.ibb.co/hB8RGp8/OF-Aidan-Ward-Leander.jpg",
        name: "[20240826] OF - Aidan Ward & Leander",
        downloadLink: "https://10gb.vn/207p3lbzywkz.html"
    },
	{
        src: "https://i.ibb.co/CPPbF60/OF-Charlie-Cherry-Pretty-Ass-Freak.jpg",
        name: "[20240826] OF - Charlie Cherry & PrettyAssFreak",
        downloadLink: "https://10gb.vn/oci22y23mwlw.html"
    },
	{
        src: "https://i.ibb.co/4MqgkT1/OF-Deep-Dicc-Roxas-Caelum-Michael-Privius-Josh-Moore.jpg",
        name: "[20240826] OF - Deep Dicc, Roxas Caelum, Michael Privius & Josh Moore",
        downloadLink: "https://10gb.vn/r4sqgn52twxl.html"
    },
	{
        src: "https://i.ibb.co/0QHLLtb/OF-Kostya-Kazenny-Dovlet.jpg",
        name: "[20240826] OF - Kostya Kazenny & Dovlet",
        downloadLink: "https://10gb.vn/vi8cy5ao2l9t.html"
    },
	{
        src: "https://i.ibb.co/44fS8cb/OF-Lucca-Mazzi-Aiden-Tyler-Rick-Griff.jpg",
        name: "[20240826] OF - Lucca Mazzi, Aiden Tyler, Rick & Griff",
        downloadLink: "https://10gb.vn/ikv15rlwcg3s.html"
    },
	{
        src: "https://i.ibb.co/3mn1zNc/OF-Malik-Delgaty-Jkab-Ethan-Dale.jpg",
        name: "[20240826] OF - Malik Delgaty & Jkab Ethan Dale",
        downloadLink: "https://10gb.vn/4qigphv09o6v.html"
    },
	{
        src: "https://i.ibb.co/64vCKLJ/OF-Silver-New-Grey-Rico-Marlon.jpg",
        name: "[20240826] OF - SilverNewGrey & Rico Marlon",
        downloadLink: "https://10gb.vn/axygg6ht2wcy.html"
    },
	{
        src: "https://i.ibb.co/Nt3nnQQ/Bait-Buddies-Gio-Carrera-Dylan-Creamer.jpg",
        name: "[20240828] Bait Buddies - Gio Carrera & Dylan Creamer",
        downloadLink: "https://10gb.vn/bsgmlanz4pc4.html"
    },
	{
        src: "https://i.ibb.co/fvv8B9D/Chaos-Men-Scott-Demarco-Brody-Fox.jpg",
        name: "[20240828] ChaosMen - Scott Demarco & Brody Fox",
        downloadLink: "https://10gb.vn/6l5hxddtp8r3.html"
    },
	{
        src: "https://i.ibb.co/f2Fzdqb/Helix-Studios-Pheonix-Fellington-Tyler-Sweet.jpg",
        name: "[20240828] Helix Studios - Pheonix Fellington & Tyler Sweet",
        downloadLink: "https://10gb.vn/88s6mo503o8p.html"
    },
	{
        src: "https://i.ibb.co/cxGrgzz/Hot-Boys-Kau-John-Novinho.jpg",
        name: "[20240828] HotBoys - Kauã & John Novinho",
        downloadLink: "https://10gb.vn/c9z3s52th5u4.html"
    },
	{
        src: "https://i.ibb.co/BnrHYQx/Kristen-Bjorn-Xiscoxx-Antonio-Travelxx.jpg",
        name: "[20240828] Kristen Bjorn - Xiscoxx & Antonio Travelxx",
        downloadLink: "https://10gb.vn/rn8sysw7l2iw.html"
    },
	{
        src: "https://i.ibb.co/f23r3Hg/Lucas-Entertainment-Derek-Kage-Michael-Lucas.jpg",
        name: "[20240828] Lucas Entertainment - Derek Kage & Michael Lucas",
        downloadLink: "https://10gb.vn/3zz1qf57o7ra.html"
    },
	{
        src: "https://i.ibb.co/JcQRQPx/MEN-Cade-Maddox-Damian-Night.jpg",
        name: "[20240828] MEN - Cade Maddox & Damian Night",
        downloadLink: "https://10gb.vn/dwnjl3cdqmbs.html"
    },
	{
        src: "https://i.ibb.co/HzhZpnP/MEN-Hayden-Harding-Brogan.jpg",
        name: "[20240828] MEN - Hayden Harding & Brogan",
        downloadLink: "https://10gb.vn/2ptncovywdpy.html"
    },
	{
        src: "https://i.ibb.co/QdNkz8b/Meninos-Online-Tiago-Ga-cho-Don-Put-o.jpg",
        name: "[20240828] Meninos Online - Tiago Gaúcho & Don Putão",
        downloadLink: "https://10gb.vn/yl7808srks4s.html"
    },
	{
        src: "https://i.ibb.co/NVckPw8/Naked-Sword-Roxas-Caelum-Yan-Andy-Rodrigues.jpg",
        name: "[20240828] Naked Sword - Roxas Caelum, Yan & Andy Rodrigues",
        downloadLink: "https://10gb.vn/urh2xb1hgj47.html"
    },
	{
        src: "https://i.ibb.co/b2CP0DS/OF-Callum-West-Uncle-Jessie.jpg",
        name: "[20240828] OF - Callum West & Uncle Jessie",
        downloadLink: "https://10gb.vn/gm7ectmqgxxz.html"
    },
	{
        src: "https://i.ibb.co/z5hLLkC/OF-Connor-Peters-Jacked-Down-Under.jpg",
        name: "[20240828] OF - Connor Peters & Jacked Down Under",
        downloadLink: "https://10gb.vn/p9f9eewk6jb0.html"
    },
	{
        src: "https://i.ibb.co/ftP3SkC/OF-Eddie-Patrick-Adam-Snow.jpg",
        name: "[20240828] OF - Eddie Patrick & Adam Snow",
        downloadLink: "https://10gb.vn/vdsmmxw0plyc.html"
    },
	{
        src: "https://i.ibb.co/XpdxP0W/OF-Josh-Moore-Geo-Scar.jpg",
        name: "[20240828] OF - Josh Moore & Geo Scar",
        downloadLink: "https://10gb.vn/l6ek75gcitlo.html"
    },
	{
        src: "https://i.ibb.co/1TWm1X2/OF-Manuel-Reyes-Junior-BR.jpg",
        name: "[20240828] OF - Manuel Reyes & Junior BR",
        downloadLink: "https://10gb.vn/wg8moben7xag.html"
    },
	{
        src: "https://i.ibb.co/KrBqcVD/OF-Matt-Dubbe-Thiago-Lazzarato.jpg",
        name: "[20240828] OF - Matt Dubbe & Thiago Lazzarato",
        downloadLink: "https://10gb.vn/enlbb40dq1q5.html"
    },
	{
        src: "https://i.ibb.co/HdV179J/OF-Military-Gay-XXX-French-Baguet.jpg",
        name: "[20240828] OF - MilitaryGayXXX & French Baguet",
        downloadLink: "https://10gb.vn/vkw4ivsay9mh.html"
    },
	{
        src: "https://i.ibb.co/1TFSKdz/OF-Rhyheim-Shabazz-Gabriel-Francisco.jpg",
        name: "[20240828] OF - Rhyheim Shabazz & Gabriel Francisco",
        downloadLink: "https://10gb.vn/gp5ccxae1jvq.html"
    },
	{
        src: "https://i.ibb.co/RhDHjmp/OF-Rhyheim-Shabazz-Elijah-Zayne-Global-Bros-CEO.jpg",
        name: "[20240828] OF - Rhyheim Shabazz, Elijah Zayne & GlobalBrosCEO",
        downloadLink: "https://10gb.vn/b9erkvb3eqmb.html"
    },
	{
        src: "https://i.ibb.co/mHQBgVw/OF-Victor-Vivone-Thiago-Lazzarato.jpg",
        name: "[20240828] OF - Victor Vivone & Thiago Lazzarato",
        downloadLink: "https://10gb.vn/gg4go4u4nvxm.html"
    },
	{
        src: "https://i.ibb.co/C5Rmry6/Raw-Alpha-Males-Roque-Rems-Jacob-Lord.jpg",
        name: "[20240828] Raw Alpha Males - Roque Rems & Jacob Lord",
        downloadLink: "https://10gb.vn/3ahjfu0erlxx.html"
    },
	{
        src: "https://i.ibb.co/YbCqX0F/UK-Naked-Men-Aitor-Crash-Toby-Park.jpg",
        name: "[20240828] UK Naked Men - Aitor Crash & Toby Park",
        downloadLink: "https://10gb.vn/6368vt7dbb03.html"
    },
	{
        src: "https://i.ibb.co/0MqfDgC/VOYR-Max-Bitte-Gonzales.jpg",
        name: "[20240828] VOYR - Max Bitte & Gonzales",
        downloadLink: "https://10gb.vn/h5bno5wim4l3.html"
    },
	{
        src: "https://i.ibb.co/JB44XpY/OF-Hung-Gay-Cock-Connor-Peters.jpg",
        name: "[20240828] OF - HungGayCock & Connor Peters",
        downloadLink: "https://10gb.vn/wqw47p2mdh1f.html"
    },
	{
        src: "https://i.ibb.co/prc99rv/ASG-Max-Sean-Xavier-Trevor-Harris-Matty-West.jpg",
        name: "[20240828] ASG Max - Sean Xavier, Trevor Harris & Matty West",
        downloadLink: "https://10gb.vn/90vdhrmdfnvl.html"
    }
];

// Sắp xếp danh sách từ Z đến A dựa trên chuỗi tên đầy đủ (bao gồm cả ngày tháng)
images.sort((a, b) => b.name.localeCompare(a.name));

// Hàm hiển thị danh sách ảnh
function displayImages(filteredImages) {
    const imageList = document.getElementById('image-list');
    imageList.innerHTML = ''; // Xóa nội dung cũ

    filteredImages.forEach(image => {
        const listItem = document.createElement('li');

        // Phần chứa ảnh
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.style.marginRight = '20px';

        // Phần chứa tên và nút download
        const textContainer = document.createElement('div');

        const titleElement = document.createElement('h3');
        const nameOnly = image.name.match(/\] (.+)/)[1]; // Hiển thị chỉ phần tên sau dấu ]
        titleElement.textContent = nameOnly;

        const buttonContainer = document.createElement('div');
        buttonContainer.style.marginTop = '50px';

        const downloadButton = document.createElement('a');
        downloadButton.href = image.downloadLink;
        downloadButton.textContent = 'Download';
        downloadButton.className = 'button';
        downloadButton.target = '_blank'; // Mở liên kết trong tab mới

        buttonContainer.appendChild(downloadButton);

        textContainer.appendChild(titleElement);
        textContainer.appendChild(buttonContainer);

        listItem.appendChild(imgElement);
        listItem.appendChild(textContainer);

        imageList.appendChild(listItem);
    });
}

// Hiển thị danh sách ảnh ban đầu
displayImages(images);

// Tìm kiếm ảnh
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    // Lọc danh sách ảnh dựa trên từ khóa tìm kiếm
    const filteredImages = images.filter(image => {
        const nameOnly = image.name.match(/\] (.+)/)[1].toLowerCase();
        return nameOnly.includes(searchTerm);
    });

    // Hiển thị danh sách ảnh đã lọc
    displayImages(filteredImages);
});
