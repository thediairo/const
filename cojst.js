var numtar;
var can=0;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("boton").onclick=()=>{
    numtar=0;
    can+=1;
    if(numtar<136){
 numtar+=getRandomNumber(1, 110);
  }
    document.getElementById("articulo").innerHTML=numtar;
    document.getElementById("can").innerHTML=can;
    
}
document.getElementById("reve").onclick=()=>{
    if(numtar==1){
        document.getElementById("con").innerHTML=`Artículo 1o. En los Estados Unidos Mexicanos todas las personas gozarán de los derechos humanos
reconocidos en esta Constitución y en los tratados internacionales de los que el Estado Mexicano sea
parte, así como de las garantías para su protección, cuyo ejercicio no podrá restringirse ni suspenderse,
salvo en los casos y bajo las condiciones que esta Constitución establece.
Párrafo reformado DOF 10-06-2011
Las normas relativas a los derechos humanos se interpretarán de conformidad con esta Constitución y
con los tratados internacionales de la materia favoreciendo en todo tiempo a las personas la protección
más amplia.
Párrafo adicionado DOF 10-06-2011
Todas las autoridades, en el ámbito de sus competencias, tienen la obligación de promover, respetar,
proteger y garantizar los derechos humanos de conformidad con los principios de universalidad,
interdependencia, indivisibilidad y progresividad. En consecuencia, el Estado deberá prevenir, investigar,
sancionar y reparar las violaciones a los derechos humanos, en los términos que establezca la ley.
Párrafo adicionado DOF 10-06-2011
Está prohibida la esclavitud en los Estados Unidos Mexicanos. Los esclavos del extranjero que entren
al territorio nacional alcanzarán, por este solo hecho, su libertad y la protección de las leyes.
Queda prohibida toda discriminación motivada por origen étnico o nacional, el género, la edad, las
discapacidades, la condición social, las condiciones de salud, la religión, las opiniones, las preferencias`;
    }
    if(numtar==2){
        document.getElementById("con").innerHTML=`La Nación Mexicana es única e indivisible.
La Nación tiene una composición pluricultural sustentada originalmente en sus pueblos indígenas que
son aquellos que descienden de poblaciones que habitaban en el territorio actual del país al iniciarse la
colonización y que conservan sus propias instituciones sociales, económicas, culturales y políticas, o
parte de ellas.
La conciencia de su identidad indígena deberá ser criterio fundamental para determinar a quiénes se
aplican las disposiciones sobre pueblos indígenas.
Son comunidades integrantes de un pueblo indígena, aquellas que formen una unidad social,
económica y cultural, asentadas en un territorio y que reconocen autoridades propias de acuerdo con sus
usos y costumbres.
El derecho de los pueblos indígenas a la libre determinación se ejercerá en un marco constitucional de
autonomía que asegure la unidad nacional. El reconocimiento de los pueblos y comunidades indígenas
se hará en las constituciones y leyes de las entidades federativas, las que deberán tomar en cuenta,
además de los principios generales establecidos en los párrafos anteriores de este artículo, criterios
etnolingüísticos y de asentamiento físico.`;

    }
    if(numtar==3){
       document.getElementById("con").innerHTML=`Toda persona tiene derecho a la educación. El Estado -Federación, Estados, Ciudad de
México y Municipios- impartirá y garantizará la educación inicial, preescolar, primaria, secundaria, media
superior y superior. La educación inicial, preescolar, primaria y secundaria, conforman la educación
básica; ésta y la media superior serán obligatorias, la educación superior lo será en términos de la
fracción X del presente artículo. La educación inicial es un derecho de la niñez y será responsabilidad del
Estado concientizar sobre su importancia.`; 
    }
    if(numtar==4){
        document.getElementById("con").innerHTML=`La mujer y el hombre son iguales ante la ley. Ésta protegerá la organización y el
desarrollo de la familia.
Toda persona tiene derecho a decidir de manera libre, responsable e informada sobre el número y el
espaciamiento de sus hijos.
Toda persona tiene derecho a la alimentación nutritiva, suficiente y de calidad. El Estado lo
garantizará.

`;
    }
    if(numtar==5){
        
        document.getElementById("con").innerHTML=`
        A ninguna persona podrá impedirse que se dedique a la profesión, industria, comercio o
trabajo que le acomode, siendo lícitos. El ejercicio de esta libertad sólo podrá vedarse por determinación
judicial, cuando se ataquen los derechos de tercero, o por resolución gubernativa, dictada en los términos
que marque la ley, cuando se ofendan los derechos de la sociedad. Nadie puede ser privado del producto
de su trabajo, sino por resolución judicial.

`;
    }
    if(numtar==6){
        document.getElementById("con").innerHTML=`
  La manifestación de las ideas no será objeto de ninguna inquisición judicial o
administrativa, sino en el caso de que ataque a la moral, la vida privada o los derechos de terceros,
provoque algún delito, o perturbe el orden público; el derecho de réplica será ejercido en los términos
dispuestos por la ley. El derecho a la información será garantizado por el Estado

`;

    }
    if(numtar==7){
        document.getElementById("con").innerHTML=`
 Es inviolable la libertad de difundir opiniones, información e ideas, a través de cualquier
medio. No se puede restringir este derecho por vías o medios indirectos, tales como el abuso de
controles oficiales o particulares, de papel para periódicos, de frecuencias radioeléctricas o de enseres y
aparatos usados en la difusión de información o por cualesquiera otros medios y tecnologías de la
información y comunicación encaminados a impedir la transmisión y circulación de ideas y opiniones.
      
      `;
        

    }
    if(numtar==8){
        document.getElementById("con").innerHTML=`
       Los funcionarios y empleados públicos respetarán el ejercicio del derecho de petición,
siempre que ésta se formule por escrito, de manera pacífica y respetuosa; pero en materia política sólo
podrán hacer uso de ese derecho los ciudadanos de la República.
A toda petición deberá recaer un acuerdo escrito de la autoridad a quien se haya dirigido, la cual tiene
obligación de hacerlo conocer en breve término al peticionario.
             
             `;
    }
    if(numtar==9){
        document.getElementById("con").innerHTML=`
   No se podrá coartar el derecho de asociarse o reunirse pacíficamente con cualquier
objeto lícito; pero solamente los ciudadanos de la República podrán hacerlo para tomar parte en los
asuntos políticos del país. Ninguna reunión armada, tiene derecho de deliberar.
No se considerará ilegal, y no podrá ser disuelta una asamblea o reunión que tenga por objeto hacer
una petición o presentar una protesta por algún acto, a una autoridad, si no se profieren injurias contra
ésta, ni se hiciere uso de violencias o amenazas para intimidarla u obligarla a resolver en el sentido que
se desee.
              `;

    }
    if(numtar==10){
        document.getElementById("con").innerHTML=`
        Los habitantes de los Estados Unidos Mexicanos tienen derecho a poseer armas en su
domicilio, para su seguridad y legítima defensa, con excepción de las prohibidas por la Ley Federal y de
las reservadas para el uso exclusivo de la Fuerza Armada permanente y los cuerpos de reserva. La ley
federal determinará los casos, condiciones, requisitos y lugares en que se podrá autorizar a los
habitantes la portación de armas.
    `;
    }
    if(numtar==11){
        document.getElementById("con").innerHTML=`
    Toda persona tiene derecho para entrar en la República, salir de ella, viajar por su
territorio y mudar de residencia, sin necesidad de carta de seguridad, pasaporte, salvoconducto u otros
requisitos semejantes. El ejercicio de este derecho estará subordinado a las facultades de la autoridad
judicial, en los casos de responsabilidad criminal o civil, y a las de la autoridad administrativa, por lo que
toca a las limitaciones que impongan las leyes sobre emigración, inmigración y salubridad general de la
República, o sobre extranjeros perniciosos residentes en el país.
Toda persona tiene derecho a buscar y recibir asilo. El reconocimiento de la condición de refugiado y
el otorgamiento de asilo político, se realizarán de conformidad con los tratados internacionales. La ley
regulará sus procedencias y excepciones.
    `;
    }
    if(numtar==12){
        document.getElementById("con").innerHTML=`
En los Estados Unidos Mexicanos no se concederán títulos de nobleza, ni prerrogativas y
honores hereditarios, ni se dará efecto alguno a los otorgados por cualquier otro país.
    `;
    }
    if(numtar==13){
        document.getElementById("con").innerHTML=`
Nadie puede ser juzgado por leyes privativas ni por tribunales especiales. Ninguna
persona o corporación puede tener fuero, ni gozar más emolumentos que los que sean compensación de
servicios públicos y estén fijados por la ley. Subsiste el fuero de guerra para los delitos y faltas contra la
disciplina militar; pero los tribunales militares en ningún caso y por ningún motivo podrán extender su
jurisdicción sobre personas que no pertenezcan al Ejército. Cuando en un delito o falta del orden militar
estuviese complicado un paisano, conocerá del caso la autoridad civil que corresponda.

    `;
    }
    if(numtar==14){
        document.getElementById("con").innerHTML=`
 A ninguna ley se dará efecto retroactivo en perjuicio de persona alguna.
Nadie podrá ser privado de la libertad o de sus propiedades, posesiones o derechos, sino mediante
juicio seguido ante los tribunales previamente establecidos, en el que se cumplan las formalidades
esenciales del procedimiento y conforme a las Leyes expedidas con anterioridad al hecho.
Párrafo reformado DOF 09-12-2005
En los juicios del orden criminal queda prohibido imponer, por simple analogía, y aún por mayoría de
razón, pena alguna que no esté decretada por una ley exactamente aplicable al delito de que se trata.
En los juicios del orden civil, la sentencia definitiva deberá ser conforme a la letra o a la interpretación
jurídica de la ley, y a falta de ésta se fundará en los principios generales del derecho.

    `;
    }
    if(numtar==15){
        document.getElementById("con").innerHTML=`
No se autoriza la celebración de tratados para la extradición de reos políticos, ni para la
de aquellos delincuentes del orden común que hayan tenido en el país donde cometieron el delito, la
condición de esclavos; ni de convenios o tratados en virtud de los que se alteren los derechos humanos
reconocidos por esta Constitución y en los tratados internacionales de los que el Estado Mexicano sea
parte
       
           `;
    }
    if(numtar==16){

                document.getElementById("con").innerHTML=`
 Nadie puede ser molestado en su persona, familia, domicilio, papeles o posesiones, sino
en virtud de mandamiento escrito de la autoridad competente, que funde y motive la causa legal del
procedimiento. En los juicios y procedimientos seguidos en forma de juicio en los que se establezca como
regla la oralidad, bastará con que quede constancia de ellos en cualquier medio que dé certeza de su
contenido y del cumplimiento de lo previsto en este párrafo.
Párrafo reformado DOF 15-09-2017
Toda persona tiene derecho a la protección de sus datos personales, al acceso, rectificación y
cancelación de los mismos, así como a manifestar su oposición, en los términos que fije la ley, la cual
establecerá los supuestos de excepción a los principios que rijan el tratamiento de datos, por razones de
seguridad nacional, disposiciones de orden público, seguridad y salud públicas o para proteger los
derechos de terceros.
Párrafo adicionado DOF 01-06-2009
No podrá librarse orden de aprehensión sino por la autoridad judicial y sin que preceda denuncia o
querella de un hecho que la ley señale como delito, sancionado con pena privativa de libertad y obren
datos que establezcan que se ha cometido ese hecho y que exista la probabilidad de que el indiciado lo
cometió o participó en su comisión.
Párrafo reformado DOF 01-06-2009. Fe de erratas DOF 25-06-2009
La autoridad que ejecute una orden judicial de aprehensión, deberá poner al inculpado a disposición
del juez, sin dilación alguna y bajo su más estricta responsabilidad. La contravención a lo anterior será
sancionada por la ley penal.
Cualquier persona puede detener al indiciado en el momento en que esté cometiendo un delito o
inmediatamente después de haberlo cometido, poniéndolo sin demora a disposición de la autoridad civil
más cercana y ésta con la misma prontitud, a la del Ministerio Público. Existirá un registro inmediato de la
detención.
Párrafo reformado DOF 26-03-2019
Sólo en casos urgentes, cuando se trate de delito grave así calificado por la ley y ante el riesgo
fundado de que el indiciado pueda sustraerse a la acción de la justicia, siempre y cuando no se pueda
ocurrir ante la autoridad judicial por razón de la hora, lugar o circunstancia, el Ministerio Público podrá,
bajo su responsabilidad, ordenar su detención, fundando y expresando los indicios que motiven su
proceder.
En casos de urgencia o flagrancia, el juez que reciba la consignación del detenido deberá
inmediatamente ratificar la detención o decretar la libertad con las reservas de ley.
La autoridad judicial, a petición del Ministerio Público y tratándose de delitos de delincuencia
organizada, podrá decretar el arraigo de una persona, con las modalidades de lugar y tiempo que la ley
señale, sin que pueda exceder de cuarenta días, siempre que sea necesario para el éxito de la
investigación, la protección de personas o bienes jurídicos, o cuando exista riesgo fundado de que el
inculpado se sustraiga a la acción de la justicia. Este plazo podrá prorrogarse, siempre y cuando el
Ministerio Público acredite que subsisten las causas que le dieron origen. En todo caso, la duración total
del arraigo no podrá exceder los ochenta días.
Por delincuencia organizada se entiende una organización de hecho de tres o más personas, para
cometer delitos en forma permanente o reiterada, en los términos de la ley de la materia.
Ningún indiciado podrá ser retenido por el Ministerio Público por más de cuarenta y ocho horas, plazo
en que deberá ordenarse su libertad o ponérsele a disposición de la autoridad judicial; este plazo podrá
duplicarse en aquellos casos que la ley prevea como delincuencia organizada. Todo abuso a lo
anteriormente dispuesto será sancionado por la ley penal.
En toda orden de cateo, que sólo la autoridad judicial podrá expedir, a solicitud del Ministerio Público,
se expresará el lugar que ha de inspeccionarse, la persona o personas que hayan de aprehenderse y los
objetos que se buscan, a lo que únicamente debe limitarse la diligencia, levantándose al concluirla, un
acta circunstanciada, en presencia de dos testigos propuestos por el ocupante del lugar cateado o en su
ausencia o negativa, por la autoridad que practique la diligencia.
Las comunicaciones privadas son inviolables. La ley sancionará penalmente cualquier acto que atente
contra la libertad y privacía de las mismas, excepto cuando sean aportadas de forma voluntaria por
alguno de los particulares que participen en ellas. El juez valorará el alcance de éstas, siempre y cuando
contengan información relacionada con la comisión de un delito. En ningún caso se admitirán
comunicaciones que violen el deber de confidencialidad que establezca la ley.
Exclusivamente la autoridad judicial federal, a petición de la autoridad federal que faculte la ley o del
titular del Ministerio Público de la entidad federativa correspondiente, podrá autorizar la intervención de
cualquier comunicación privada. Para ello, la autoridad competente deberá fundar y motivar las causas
legales de la solicitud, expresando además, el tipo de intervención, los sujetos de la misma y su duración.
La autoridad judicial federal no podrá otorgar estas autorizaciones cuando se trate de materias de
carácter electoral, fiscal, mercantil, civil, laboral o administrativo, ni en el caso de las comunicaciones del
detenido con su defensor.
Los Poderes Judiciales contarán con jueces de control que resolverán, en forma inmediata, y por
cualquier medio, las solicitudes de medidas cautelares, providencias precautorias y técnicas de
investigación de la autoridad, que requieran control judicial, garantizando los derechos de los indiciados y
de las víctimas u ofendidos. Deberá existir un registro fehaciente de todas las comunicaciones entre
jueces y Ministerio Público y demás autoridades competentes.
Las intervenciones autorizadas se ajustarán a los requisitos y límites previstos en las leyes. Los
resultados de las intervenciones que no cumplan con éstos, carecerán de todo valor probatorio.
La autoridad administrativa podrá practicar visitas domiciliarias únicamente para cerciorarse de que se
han cumplido los reglamentos sanitarios y de policía; y exigir la exhibición de los libros y papeles
indispensables para comprobar que se han acatado las disposiciones fiscales, sujetándose en estos
casos, a las leyes respectivas y a las formalidades prescritas para los cateos.
La correspondencia que bajo cubierta circule por las estafetas estará libre de todo registro, y su
violación será penada por la ley.
En tiempo de paz ningún miembro del Ejército podrá alojarse en casa particular contra la voluntad del
dueño, ni imponer prestación alguna. En tiempo de guerra los militares podrán exigir alojamiento,
bagajes, alimentos y otras prestaciones, en los términos que establezca la ley marcial correspondiente
           `;
    

    }
    if(numtar==17){
  
            document.getElementById("con").innerHTML=`
  Artículo 17. Ninguna persona podrá hacerse justicia por sí misma, ni ejercer violencia para reclamar
su derecho.
Toda persona tiene derecho a que se le administre justicia por tribunales que estarán expeditos para
impartirla en los plazos y términos que fijen las leyes, emitiendo sus resoluciones de manera pronta,
completa e imparcial. Su servicio será gratuito, quedando, en consecuencia, prohibidas las costas
judiciales.
Siempre que no se afecte la igualdad entre las partes, el debido proceso u otros derechos en los
juicios o procedimientos seguidos en forma de juicio, las autoridades deberán privilegiar la solución del
conflicto sobre los formalismos procedimentales.
Párrafo adicionado DOF 15-09-2017
El Congreso de la Unión expedirá las leyes que regulen las acciones colectivas. Tales leyes
determinarán las materias de aplicación, los procedimientos judiciales y los mecanismos de reparación
del daño. Los jueces federales conocerán de forma exclusiva sobre estos procedimientos y mecanismos.
Las leyes preverán mecanismos alternativos de solución de controversias. En la materia penal
regularán su aplicación, asegurarán la reparación del daño y establecerán los casos en los que se
requerirá supervisión judicial.
Las sentencias que pongan fin a los procedimientos orales deberán ser explicadas en audiencia
pública previa citación de las partes.
Las leyes federales y locales establecerán los medios necesarios para que se garantice la
independencia de los tribunales y la plena ejecución de sus resoluciones.
La Federación y las entidades federativas garantizarán la existencia de un servicio de defensoría
pública de calidad para la población y asegurarán las condiciones para un servicio profesional de carrera
para los defensores. Las percepciones de los defensores no podrán ser inferiores a las que correspondan
a los agentes del Ministerio Público

           
               `;
        

    }
    if(numtar==18){

        document.getElementById("con").innerHTML=`
Artículo 18. Sólo por delito que merezca pena privativa de libertad habrá lugar a prisión preventiva. El
sitio de ésta será distinto del que se destinare para la extinción de las penas y estarán completamente
separados.
El sistema penitenciario se organizará sobre la base del respeto a los derechos humanos, del trabajo,
la capacitación para el mismo, la educación, la salud y el deporte como medios para lograr la reinserción
del sentenciado a la sociedad y procurar que no vuelva a delinquir, observando los beneficios que para él
prevé la ley. Las mujeres compurgarán sus penas en lugares separados de los destinados a los hombres
para tal efecto.
Párrafo reformado DOF 10-06-2011
La Federación y las entidades federativas podrán celebrar convenios para que los sentenciados por
delitos del ámbito de su competencia extingan las penas en establecimientos penitenciarios dependientes
de una jurisdicción diversa.
Párrafo reformado DOF 29-01-2016
La Federación y las entidades federativas establecerán, en el ámbito de sus respectivas
competencias, un sistema integral de justicia para los adolescentes, que será aplicable a quienes se
atribuya la comisión o participación en un hecho que la ley señale como delito y tengan entre doce años
cumplidos y menos de dieciocho años de edad. Este sistema garantizará los derechos humanos que
reconoce la Constitución para toda persona, así como aquellos derechos específicos que por su
condición de personas en desarrollo les han sido reconocidos a los adolescentes. Las personas menores
de doce años a quienes se atribuya que han cometido o participado en un hecho que la ley señale como
delito, sólo podrán ser sujetos de asistencia social.
Párrafo reformado DOF 02-07-2015, 29-01-2016
La operación del sistema en cada orden de gobierno estará a cargo de instituciones, tribunales y
autoridades especializados en la procuración e impartición de justicia para adolescentes. Se podrán
aplicar las medidas de orientación, protección y tratamiento que amerite cada caso, atendiendo a la
protección integral y el interés superior del adolescente.
Las formas alternativas de justicia deberán observarse en la aplicación de este sistema, siempre que
resulte procedente. El proceso en materia de justicia para adolescentes será acusatorio y oral, en el que
se observará la garantía del debido proceso legal, así como la independencia de las autoridades que
efectúen la remisión y las que impongan las medidas. Éstas deberán ser proporcionales al hecho
realizado y tendrán como fin la reinserción y la reintegración social y familiar del adolescente, así como el
pleno desarrollo de su persona y capacidades. El internamiento se utilizará sólo como medida extrema y
por el tiempo más breve que proceda, y podrá aplicarse únicamente a los adolescentes mayores de
catorce años de edad, por la comisión o participación en un hecho que la ley señale como delito.
Párrafo reformado DOF 02-07-2015
Los sentenciados de nacionalidad mexicana que se encuentren compurgando penas en países
extranjeros, podrán ser trasladados a la República para que cumplan sus condenas con base en los
sistemas de reinserción social previstos en este artículo, y los sentenciados de nacionalidad extranjera
por delitos del orden federal o del fuero común, podrán ser trasladados al país de su origen o residencia,
sujetándose a los Tratados Internacionales que se hayan celebrado para ese efecto. El traslado de los
reclusos sólo podrá efectuarse con su consentimiento expreso.
Los sentenciados, en los casos y condiciones que establezca la ley, podrán compurgar sus penas en
los centros penitenciarios más cercanos a su domicilio, a fin de propiciar su reintegración a la comunidad 
   `;

    }
    if(numtar==19){
        
        document.getElementById("con").innerHTML=`
        Ninguna detención ante autoridad judicial podrá exceder del plazo de setenta y dos
horas, a partir de que el indiciado sea puesto a su disposición, sin que se justifique con un auto de
vinculación a proceso en el que se expresará: el delito que se impute al acusado; el lugar, tiempo y
circunstancias de ejecución, así como los datos que establezcan que se ha cometido un hecho que la ley
señale como delito y que exista la probabilidad de que el indiciado lo cometió o participó en su comisión.
El Ministerio Público sólo podrá solicitar al juez la prisión preventiva cuando otras medidas cautelares
no sean suficientes para garantizar la comparecencia del imputado en el juicio, el desarrollo de la
investigación, la protección de la víctima, de los testigos o de la comunidad, así como cuando el imputado
esté siendo procesado o haya sido sentenciado previamente por la comisión de un delito doloso. El juez
ordenará la prisión preventiva oficiosamente, en los casos de abuso o violencia sexual contra menores,
delincuencia organizada, homicidio doloso, feminicidio, violación, secuestro, trata de personas, robo de
casa habitación, uso de programas sociales con fines electorales, corrupción tratándose de los delitos de
enriquecimiento ilícito y ejercicio abusivo de funciones, robo al transporte de carga en cualquiera de sus
modalidades, delitos en materia de hidrocarburos, petrolíferos o petroquímicos, delitos en materia de
desaparición forzada de personas y desaparición cometida por particulares, delitos cometidos con medios
violentos como armas y explosivos, delitos en materia de armas de fuego y explosivos de uso exclusivo
del Ejército, la Armada y la Fuerza Aérea, así como los delitos graves que determine la ley en contra de la
seguridad de la nación, el libre desarrollo de la personalidad, y de la salud.
Párrafo reformado DOF 14-07-2011, 12-04-2019
La ley determinará los casos en los cuales el juez podrá revocar la libertad de los individuos
vinculados a proceso.
El plazo para dictar el auto de vinculación a proceso podrá prorrogarse únicamente a petición del
indiciado, en la forma que señale la ley. La prolongación de la detención en su perjuicio será sancionada
por la ley penal. La autoridad responsable del establecimiento en el que se encuentre internado el
indiciado, que dentro del plazo antes señalado no reciba copia autorizada del auto de vinculación a
proceso y del que decrete la prisión preventiva, o de la solicitud de prórroga del plazo constitucional,
deberá llamar la atención del juez sobre dicho particular en el acto mismo de concluir el plazo y, si no
recibe la constancia mencionada dentro de las tres horas siguientes, pondrá al indiciado en libertad.
Todo proceso se seguirá forzosamente por el hecho o hechos delictivos señalados en el auto de
vinculación a proceso. Si en la secuela de un proceso apareciere que se ha cometido un delito distinto del
que se persigue, deberá ser objeto de investigación separada, sin perjuicio de que después pueda
decretarse la acumulación, si fuere conducente.
Si con posterioridad a la emisión del auto de vinculación a proceso por delincuencia organizada el
inculpado evade la acción de la justicia o es puesto a disposición de otro juez que lo reclame en el
extranjero, se suspenderá el proceso junto con los plazos para la prescripción de la acción penal.
           `;

    }
    if(numtar==20){
        document.getElementById("con").innerHTML=`
      El proceso penal será acusatorio y oral. Se regirá por los principios de publicidad,
contradicción, concentración, continuidad e inmediación.
A. De los principios generales:
I. El proceso penal tendrá por objeto el esclarecimiento de los hechos, proteger al inocente,
procurar que el culpable no quede impune y que los daños causados por el delito se
reparen;
II. Toda audiencia se desarrollará en presencia del juez, sin que pueda delegar en ninguna
persona el desahogo y la valoración de las pruebas, la cual deberá realizarse de manera
libre y lógica;
III. Para los efectos de la sentencia sólo se considerarán como prueba aquellas que hayan
sido desahogadas en la audiencia de juicio. La ley establecerá las excepciones y los
requisitos para admitir en juicio la prueba anticipada, que por su naturaleza requiera
desahogo previo;
IV. El juicio se celebrará ante un juez que no haya conocido del caso previamente. La
presentación de los argumentos y los elementos probatorios se desarrollará de manera
pública, contradictoria y oral;
V. La carga de la prueba para demostrar la culpabilidad corresponde a la parte acusadora,
conforme lo establezca el tipo penal. Las partes tendrán igualdad procesal para sostener
la acusación o la defensa, respectivamente;
VI. Ningún juzgador podrá tratar asuntos que estén sujetos a proceso con cualquiera de las
partes sin que esté presente la otra, respetando en todo momento el principio de
contradicción, salvo las excepciones que establece esta Constitución;
VII. Una vez iniciado el proceso penal, siempre y cuando no exista oposición del inculpado, se
podrá decretar su terminación anticipada en los supuestos y bajo las modalidades que
determine la ley. Si el imputado reconoce ante la autoridad judicial, voluntariamente y con
conocimiento de las consecuencias, su participación en el delito y existen medios de
convicción suficientes para corroborar la imputación, el juez citará a audiencia de
sentencia. La ley establecerá los beneficios que se podrán otorgar al inculpado cuando
acepte su responsabilidad;
VIII. El juez sólo condenará cuando exista convicción de la culpabilidad del procesado;
IX. Cualquier prueba obtenida con violación de derechos fundamentales será nula, y
X. Los principios previstos en este artículo, se observarán también en las audiencias
preliminares al juicio.
           `;

    }
    if(numtar==21){
        document.getElementById("con").innerHTML=`
La investigación de los delitos corresponde al Ministerio Público y a las policías, las
cuales actuarán bajo la conducción y mando de aquél en el ejercicio de esta función.
El ejercicio de la acción penal ante los tribunales corresponde al Ministerio Público. La ley determinará
los casos en que los particulares podrán ejercer la acción penal ante la autoridad judicial.
La imposición de las penas, su modificación y duración son propias y exclusivas de la autoridad
judicial.
Compete a la autoridad administrativa la aplicación de sanciones por las infracciones de los
reglamentos gubernativos y de policía, las que únicamente consistirán en multa, arresto hasta por treinta
y seis horas o en trabajo a favor de la comunidad; pero si el infractor no pagare la multa que se le hubiese
impuesto, se permutará esta por el arresto correspondiente, que no excederá en ningún caso de treinta y
seis horas.
Si el infractor de los reglamentos gubernativos y de policía fuese jornalero, obrero o trabajador, no
podrá ser sancionado con multa mayor del importe de su jornal o salario de un día.
Tratándose de trabajadores no asalariados, la multa que se imponga por infracción de los reglamentos
gubernativos y de policía, no excederá del equivalente a un día de su ingreso.
El Ministerio Público podrá considerar criterios de oportunidad para el ejercicio de la acción penal, en
los supuestos y condiciones que fije la ley.
El Ejecutivo Federal podrá, con la aprobación del Senado en cada caso, reconocer la jurisdicción de la
Corte Penal Internacional.
La seguridad pública es una función del Estado a cargo de la Federación, las entidades federativas y
los Municipios, cuyos fines son salvaguardar la vida, las libertades, la integridad y el patrimonio de las
personas, así como contribuir a la generación y preservación del orden público y la paz social, de
conformidad con lo previsto en esta Constitución y las leyes en la materia. La seguridad pública
comprende la prevención, investigación y persecución de los delitos, así como la sanción de las
infracciones administrativas, en los términos de la ley, en las respectivas competencias que esta
Constitución señala. La actuación de las instituciones de seguridad pública se regirá por los principios de
legalidad, objetividad, eficiencia, profesionalismo, honradez y respeto a los derechos humanos
reconocidos en esta Constitución.
Párrafo reformado DOF 29-01-2016, 26-03-2019
Las instituciones de seguridad pública, incluyendo la Guardia Nacional, serán de carácter civil,
disciplinado y profesional. El Ministerio Público y las instituciones policiales de los tres órdenes de
gobierno deberán coordinarse entre sí para cumplir los fines de la seguridad pública y conformarán el
Sistema Nacional de Seguridad Pública, que estará sujeto a las siguientes bases mínimas:
             `;

    }
    if(numtar==22){
        document.getElementById("con").innerHTML=`
      . Quedan prohibidas las penas de muerte, de mutilación, de infamia, la marca, los azotes,
los palos, el tormento de cualquier especie, la multa excesiva, la confiscación de bienes y cualesquiera
otras penas inusitadas y trascendentales. Toda pena deberá ser proporcional al delito que sancione y al
bien jurídico afectado.
No se considerará confiscación la aplicación de bienes de una persona cuando sea decretada para el
pago de multas o impuestos, ni cuando la decrete la autoridad judicial para el pago de responsabilidad
civil derivada de la comisión de un delito. Tampoco se considerará confiscación el decomiso que ordene
la autoridad judicial de los bienes en caso de enriquecimiento ilícito en los términos del artículo 109, la
aplicación a favor del Estado de bienes asegurados que causen abandono en los términos de las
disposiciones aplicables, ni de aquellos bienes cuyo dominio se declare extinto en sentencia.
                     `;
        

    }
    if(numtar==23){

        document.getElementById("con").innerHTML=`
      Ningún juicio criminal deberá tener más de tres instancias. Nadie puede ser juzgado dos
veces por el mismo delito, ya sea que en el juicio se le absuelva o se le condene. Queda prohibida la
práctica de absolver de la instancia.
                       `;

    }
    if(numtar==24){
        document.getElementById("con").innerHTML=`
Toda persona tiene derecho a la libertad de convicciones éticas, de conciencia y de
religión, y a tener o adoptar, en su caso, la de su agrado. Esta libertad incluye el derecho de participar,
individual o colectivamente, tanto en público como en privado, en las ceremonias, devociones o actos del
culto respectivo, siempre que no constituyan un delito o falta penados por la ley. Nadie podrá utilizar los
actos públicos de expresión de esta libertad con fines políticos, de proselitismo o de propaganda política
                       `;
    }
    if(numtar==25){

        document.getElementById("con").innerHTML=`
Corresponde al Estado la rectoría del desarrollo nacional para garantizar que éste sea
integral y sustentable, que fortalezca la Soberanía de la Nación y su régimen democrático y que,
mediante la competitividad, el fomento del crecimiento económico y el empleo y una más justa
distribución del ingreso y la riqueza, permita el pleno ejercicio de la libertad y la dignidad de los
individuos, grupos y clases sociales, cuya seguridad protege esta Constitución. La competitividad se
entenderá como el conjunto de condiciones necesarias para generar un mayor crecimiento económico,
promoviendo la inversión y la generación de empleo.
                       `;

    }
    if(numtar==26){

        document.getElementById("con").innerHTML=`
A. El Estado organizará un sistema de planeación democrática del desarrollo nacional que imprima
solidez, dinamismo, competitividad, permanencia y equidad al crecimiento de la economía para la
independencia y la democratización política, social y cultural de la nación.
B. El Estado contará con un Sistema Nacional de Información Estadística y Geográfica cuyos datos
serán considerados oficiales. Para la Federación, las entidades federativas, los Municipios y las
demarcaciones territoriales de la Ciudad de México, los datos contenidos en el Sistema serán de
uso obligatorio en los términos que establezca la ley.
C. El Estado contará con un Consejo Nacional de Evaluación de la Política de Desarrollo Social, que
será un órgano autónomo, con personalidad jurídica y patrimonio propios, a cargo de la medición
de la pobreza y de la evaluación de los programas, objetivos, metas y acciones de la política de
desarrollo social, así como de emitir recomendaciones en los términos que disponga la ley, la
cual establecerá las formas de coordinación del órgano con las autoridades federales, locales y
municipales para el ejercicio de sus funciones.

                       `;

    }
    if(numtar==27){
        document.getElementById("con").innerHTML=`
 La propiedad de las tierras y aguas comprendidas dentro de los límites del territorio
nacional, corresponde originariamente a la Nación, la cual ha tenido y tiene el derecho de transmitir el
dominio de ellas a los particulares, constituyendo la propiedad privada.

                       `;
    }
    if(numtar==28){
        document.getElementById("con").innerHTML=`
En los Estados Unidos Mexicanos quedan prohibidos los monopolios, las prácticas
monopólicas, los estancos, las condonaciones de impuestos y las exenciones de impuestos en los
términos y condiciones que fijan las leyes. El mismo tratamiento se dará a las prohibiciones a título de
protección a la industria.

                       `;
    }
    if(numtar==29){
        document.getElementById("con").innerHTML=`
      En los casos de invasión, perturbación grave de la paz pública, o de cualquier otro que
ponga a la sociedad en grave peligro o conflicto, solamente el Presidente de los Estados Unidos
Mexicanos, con la aprobación del Congreso de la Unión o de la Comisión Permanente cuando aquel no
estuviere reunido, podrá restringir o suspender en todo el país o en lugar determinado el ejercicio de los
derechos y las garantías que fuesen obstáculo para hacer frente, rápida y fácilmente a la situación; pero
deberá hacerlo por un tiempo limitado, por medio de prevenciones generales y sin que la restricción o
suspensión se contraiga a determinada persona. Si la restricción o suspensión tuviese lugar hallándose el
Congreso reunido, éste concederá las autorizaciones que estime necesarias para que el Ejecutivo haga
frente a la situación; pero si se verificase en tiempo de receso, se convocará de inmediato al Congreso
para que las acuerde.
        
                               `;
    }
    if(numtar==30){
        document.getElementById("con").innerHTML=`
 . La nacionalidad mexicana se adquiere por nacimiento o por naturalización.
A) Son mexicanos por nacimiento:
I. Los que nazcan en territorio de la República, sea cual fuere la nacionalidad de sus
padres.
II. Los que nazcan en el extranjero, hijos de padres mexicanos, de madre mexicana o de
padre mexicano;
Fracción reformada DOF 26-12-1969, 20-03-1997, 17-05-2021
III. Los que nazcan en el extranjero, hijos de padres mexicanos por naturalización, de padre
mexicano por naturalización, o de madre mexicana por naturalización, y
Fracción adicionada DOF 20-03-1997
IV. Los que nazcan a bordo de embarcaciones o aeronaves mexicanas, sean de guerra o
mercantes.

        
                               `;
    }
    if(numtar==31){
        document.getElementById("con").innerHTML=`
 Son obligaciones de los mexicanos:
I. Sión reformada DOF 05-03-1993, 12-11-2002, 09-02-2012, 15-05-2019
II. Aer responsables de que sus hijas, hijos o pupilos menores de dieciocho años concurran a las
escuelas, para recibir la educación obligatoria y, en su caso, reciban la militar, en los términos
que establezca la ley, así como participar en su proceso educativo, al revisar su progreso y
desempeño, velando siempre por su bienestar y desarrollo;
Fraccsistir en los días y horas designados por el Ayuntamiento del lugar en que residan, para recibir
instrucción cívica y militar que los mantenga aptos en el ejercicio de los derechos de ciudadano,
diestros en el manejo de las armas, y conocedores de la disciplina militar.
III. Alistarse y servir en los cuerpos de reserva, conforme a la ley, para asegurar y defender la
independencia, el territorio, el honor, los derechos e intereses de la Patria, y
Fracción reformada DOF 26-03-2019
IV. Contribuir para los gastos públicos, así de la Federación, como de los Estados, de la Ciudad de
México y del Municipio en que residan, de la manera proporcional y equitativa que dispongan las
leyes.

        
                               `;
    }
    if(numtar==32){
        document.getElementById("con").innerHTML=`
 . La Ley regulará el ejercicio de los derechos que la legislación mexicana otorga a los
mexicanos que posean otra nacionalidad y establecerá normas para evitar conflictos por doble
nacionalidad.
El ejercicio de los cargos y funciones para los cuales, por disposición de la presente Constitución, se
requiera ser mexicano por nacimiento, se reserva a quienes tengan esa calidad y no adquieran otra
nacionalidad. Esta reserva también será aplicable a los casos que así lo señalen otras leyes del
Congreso de la Unión.
En tiempo de paz, ningún extranjero podrá servir en el Ejército, ni en las fuerzas de policía o seguridad
pública. Para pertenecer al activo del Ejército en tiempo de paz y al de la Armada o al de la Fuerza Aérea
en todo momento, o desempeñar cualquier cargo o comisión en ellos, se requiere ser mexicano por
nacimiento.
Esta misma calidad será indispensable en capitanes, pilotos, patrones, maquinistas, mecánicos y, de
una manera general, para todo el personal que tripule cualquier embarcación o aeronave que se ampare
con la bandera o insignia mercante mexicana. Será también necesaria para desempeñar los cargos de
capitán de puerto y todos los servicios de practicaje y comandante de aeródromo.
Los mexicanos serán preferidos a los extranjeros en igualdad de circunstancias, para toda clase de
concesiones y para todos los empleos, cargos o comisiones de gobierno en que no sea indispensable la
calidad de ciudadano.
       
               
                                      `;
    }
    if(numtar==33){
        document.getElementById("con").innerHTML=`
        Son personas extranjeras las que no posean las calidades determinadas en el artículo 30
constitucional y gozarán de los derechos humanos y garantías que reconoce esta Constitución

                                             `;

    }
    if(numtar==34){
        document.getElementById("con").innerHTML=`
         Son ciudadanos de la República los varones y mujeres que, teniendo la calidad de
        mexicanos, reúnan, además, los siguientes requisitos:
        I. Haber cumplido 18 años, y
        II. Tener un modo honesto de vivir.

                                             `;
    }
    if(numtar==35){
        document.getElementById("con").innerHTML=`
     Son derechos de la ciudadanía:
Párrafo reformado DOF 09-08-2012, 06-06-2019
I. Votar en las elecciones populares;
II. Poder ser votada en condiciones de paridad para todos los cargos de elección popular, teniendo
las calidades que establezca la ley. El derecho de solicitar el registro de candidatos y candidatas
ante la autoridad electoral corresponde a los partidos políticos, así como a los ciudadanos y las
ciudadanas que soliciten su registro de manera independiente y cumplan con los requisitos,
condiciones y términos que determine la legislación;
Fracción reformada DOF 09-08-2012, 06-06-2019
III. Asociarse individual y libremente para tomar parte en forma pacífica en los asuntos políticos del
país;
Fracción reformada DOF 06-04-1990, 22-08-1996
IV. Tomar las armas en la Fuerza Armada permanente o en los cuerpos de reserva, para la defensa
de la República y de sus instituciones, en los términos que prescriben las leyes;
Fracción reformada DOF 09-08-2012, 26-03-2019
V. Ejercer en toda clase de negocios el derecho de petición.
VI. Poder ser nombrado para cualquier empleo o comisión del servicio público, teniendo las
calidades que establezca la ley;

                                            `;
    }
    if(numtar==36){
        document.getElementById("con").innerHTML=`
  Son obligaciones del ciudadano de la República:
I. Inscribirse en el catastro de la municipalidad, manifestando la propiedad que el mismo ciudadano
tenga, la industria, profesión o trabajo de que subsista; así como también inscribirse en el
Registro Nacional de Ciudadanos, en los términos que determinen las leyes.
La organización y el funcionamiento permanente del Registro Nacional de Ciudadanos y la
expedición del documento que acredite la ciudadanía mexicana son servicios de interés público, y
por tanto, responsabilidad que corresponde al Estado y a los ciudadanos en los términos que
establezca la ley,
Fracción reformada DOF 06-04-1990
II. Formar parte de los cuerpos de reserva en términos de ley;
Fracción reformada DOF 26-03-2019
CONSTITUCIÓN POLÍTICA DE LOS ESTADOS UNIDOS MEXICANOS
CÁMARA DE DIPUTADOS DEL H. CONGRESO DE LA UNIÓN
Secretaría General
Secretaría de Servicios Parlamentarios
Última Reforma DOF 22-03-2024
49 de 363
III. Votar en las elecciones, las consultas populares y los procesos de revocación de mandato, en los
términos que señale la ley;
Fracción reformada DOF 22-08-1996, 09-08-2012, 20-12-2019
IV. Desempeñar los cargos de elección popular de la Federación o de las entidades federativas, que
en ningún caso serán gratuitos; y
Fracción reformada DOF 29-01-2016
V. Desempeñar los cargos concejiles del municipio donde resida, las funciones electorales y las de
jurado
   
                                               `;
    }
    if(numtar==37){
        document.getElementById("con").innerHTML=`
Artículo 37.
A) Ningún mexicano por nacimiento podrá ser privado de su nacionalidad.
B) La nacionalidad mexicana por naturalización se perderá en los siguientes casos:
I. Por adquisición voluntaria de una nacionalidad extranjera, por hacerse pasar en cualquier
instrumento público como extranjero, por usar un pasaporte extranjero, o por aceptar o usar
títulos nobiliarios que impliquen sumisión a un Estado extranjero, y
II. Por residir durante cinco años continuos en el extranjero.
C) La ciudadanía mexicana se pierde:
I. Por aceptar o usar títulos nobiliarios de gobiernos extranjeros;
II. Por prestar voluntariamente servicios o funciones oficiales a un gobierno extranjero, sin
permiso del Ejecutivo Federal;
Fracción reformada DOF 30-09-2013
III. Por aceptar o usar condecoraciones extranjeras sin permiso del Ejecutivo Federal.
El Presidente de la República, los senadores y diputados al Congreso de la Unión y los
ministros de la Suprema Corte de Justicia de la Nación podrán libremente aceptar y usar
condecoraciones extranjeras;
Fracción reformada DOF 30-09-2013
IV. Por admitir del gobierno de otro país títulos o funciones sin previo permiso del Ejecutivo
Federal, exceptuando los títulos literarios, científicos o humanitarios que pueden aceptarse
libremente;
Fracción reformada DOF 30-09-2013
V. Por ayudar, en contra de la Nación, a un extranjero, o a un gobierno extranjero, en cualquier
reclamación diplomática o ante un tribunal internacional, y
VI. En los demás casos que fijan las leyes.
   
                                               `;
    }
    if(numtar==38){
        document.getElementById("con").innerHTML=`
Artículo 38. Los derechos o prerrogativas de los ciudadanos se suspenden:
I. Por falta de cumplimiento, sin causa justificada, de cualquiera de las obligaciones que impone el
artículo 36. Esta suspensión durará un año y se impondrá además de las otras penas que por el
mismo hecho señalare la ley;
II. Por estar sujeto a un proceso criminal por delito que merezca pena corporal, a contar desde la
fecha del auto de formal prisión;
III. Durante la extinción de una pena corporal;
IV. Por vagancia o ebriedad consuetudinaria, declarada en los términos que prevengan las leyes;
V. Por estar prófugo de la justicia, desde que se dicte la orden de aprehensión hasta que prescriba
la acción penal;
Fracción reformada DOF 29-05-2023
VI. Por sentencia ejecutoria que imponga como pena esa suspensión, y
Fracción reformada DOF 29-05-2023
VII. Por tener sentencia firme por la comisión intencional de delitos contra la vida y la integridad
corporal; contra la libertad y seguridad sexuales, el normal desarrollo psicosexual; por violencia
familiar, violencia familiar equiparada o doméstica, violación a la intimidad sexual; por violencia
política contra las mujeres en razón de género, en cualquiera de sus modalidades y tipos.
Por ser declarada como persona deudora alimentaria morosa.
En los supuestos de esta fracción, la persona no podrá ser registrada como candidata para
cualquier cargo de elección popular, ni ser nombrada para empleo, cargo o comisión en el
servicio público.

   
                                               `;
    }
    if(numtar==39){
        document.getElementById("con").innerHTML=`
Artículo 39. La soberanía nacional reside esencial y originariamente en el pueblo. Todo poder público
dimana del pueblo y se instituye para beneficio de éste. El pueblo tiene en todo tiempo el inalienable
derecho de alterar o modificar la forma de su gobierno.
   
                                               `;
    }
    if(numtar==40){
        document.getElementById("con").innerHTML=`
     Artículo 40. Es voluntad del pueblo mexicano constituirse en una República representativa,
democrática, laica y federal, compuesta por Estados libres y soberanos en todo lo concerniente a su
régimen interior, y por la Ciudad de México, unidos en una federación establecida según los principios de
esta ley fundamental.
           
                                                       `;
    }
    if(numtar==41){
        document.getElementById("con").innerHTML=`
      Artículo 41. El pueblo ejerce su soberanía por medio de los Poderes de la Unión, en los casos de la
competencia de éstos, y por los de los Estados y la Ciudad de México, en lo que toca a sus regímenes
interiores, en los términos respectivamente establecidos por la presente Constitución Federal y las 
              
                                                          `;

    }
    if(numtar==42){
        document.getElementById("con").innerHTML=`
Artículo 42. El territorio nacional comprende:
I. El de las partes integrantes de la Federación;
II. El de las islas, incluyendo los arrecifes y cayos en los mares adyacentes;
III. El de las islas de Guadalupe y las de Revillagigedo situadas en el Océano Pacífico;
IV. La plataforma continental y los zócalos submarinos de las islas, cayos y arrecifes;
V. Las aguas de los mares territoriales en la extensión y términos que fija el Derecho Internacional y
las marítimas interiores;
VI. El espacio situado sobre el territorio nacional, con la extensión y modalidades que establezca el
propio Derecho Internacional.

                
                                                            `;

    }
    if(numtar==43){
        document.getElementById("con").innerHTML=`
Artículo 43. Las partes integrantes de la Federación son los Estados de Aguascalientes, Baja
California, Baja California Sur, Campeche, Coahuila de Zaragoza, Colima, Chiapas, Chihuahua, Durango,
Guanajuato, Guerrero, Hidalgo, Jalisco, México, Michoacán de Ocampo, Morelos, Nayarit, Nuevo León,
Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí, Sinaloa, Sonora, Tabasco, Tamaulipas,
Tlaxcala, Veracruz de Ignacio de la Llave, Yucatán y Zacatecas; así como la Ciudad de México.
                                                                    `;
    }
    if(numtar==44){
        document.getElementById("con").innerHTML=`
Artículo 44. La Ciudad de México es la entidad federativa sede de los Poderes de la Unión y Capital
de los Estados Unidos Mexicanos; se compondrá del territorio que actualmente tiene y, en caso de que
los poderes federales se trasladen a otro lugar, se erigirá en un Estado de la Unión con la denominación
de Ciudad de México.
                                                                    `;

    }
    if(numtar==45){
        document.getElementById("con").innerHTML=`
     Artículo 45. Los Estados de la Federación conservan la extensión y límites que hasta hoy han tenido,
siempre que no haya dificultad en cuanto a éstos
                                                                            `;

    }
    if(numtar==46){
        document.getElementById("con").innerHTML=`
  Artículo 46. Las entidades federativas pueden arreglar entre sí y en cualquier momento, por
convenios amistosos, sus respectivos límites; pero no se llevarán a efecto esos arreglos sin la aprobación
de la Cámara de Senadores.
De no existir el convenio a que se refiere el párrafo anterior, y a instancia de alguna de las partes en
conflicto, la Suprema Corte de Justicia de la Nación conocerá, sustanciará y resolverá con carácter de
inatacable, las controversias sobre límites territoriales que se susciten entre las entidades federativas, en
los términos de la fracción I del artículo 105 de esta Constitución.
                                                                            `;


    }
    if(numtar==47){
        document.getElementById("con").innerHTML=`
 Artículo 47. El Estado del (sic DOF 05-02-1917) Nayarit tendrá la extensión territorial y límites que
comprende actualmente el Territorio de Tepic
                                                                                  `;

    }
    if(numtar==48){
        document.getElementById("con").innerHTML=`
 Artículo 48. Las islas, los cayos y arrecifes de los mares adyacentes que pertenezcan al territorio
nacional, la plataforma continental, los zócalos submarinos de las islas, de los cayos y arrecifes, los
mares territoriales, las aguas marítimas interiores y el espacio situado sobre el territorio nacional, 
                                                                                  `;
    }
    if(numtar==49){
        document.getElementById("con").innerHTML=`
       Artículo 49. El Supremo Poder de la Federación se divide para su ejercicio en Legislativo, Ejecutivo y
Judicial.
No podrán reunirse dos o más de estos Poderes en una sola persona o corporación, ni depositarse el
Legislativo en un individuo, salvo el caso de facultades extraordinarias al Ejecutivo de la Unión, conforme
a lo dispuesto en el artículo 29. En ningún otro caso, salvo lo dispuesto en el segundo párrafo del artículo
131, se otorgarán facultades extraordinarias para legislar.

                                                                                         `;

    }
    if(numtar==50){
        document.getElementById("con").innerHTML=`
        Artículo 50. El poder legislativo de los Estados Unidos Mexicanos se deposita en un Congreso
general, que se dividirá en dos Cámaras, una de diputados y otra de senadores
 
                                                                                          `;
    }
    if(numtar==51){
        document.getElementById("con").innerHTML=`
Artículo 51. La Cámara de Diputados se compondrá de representantes de la Nación, electos en su
totalidad cada tres años. Por cada diputado propietario, se elegirá un suplente.
Artículo reformado D
 
                                                                                          `;

    }
    if(numtar==52){
        document.getElementById("con").innerHTML=`
Artículo 52. La Cámara de Diputados estará integrada por 300 diputadas y diputados electos según el
principio de votación mayoritaria relativa, mediante el sistema de distritos electorales uninominales, así
como por 200 diputadas y diputados que serán electos según el principio de representación proporcional,
mediante el Sistema de Listas Regionales, votadas en circunscripciones plurinominales.
 
                                                                                          `;
    }
    if(numtar==53){
        document.getElementById("con").innerHTML=`
          Artículo 53. La demarcación territorial de los 300 distritos electorales uninominales será la que resulte
de dividir la población total del país entre los distritos señalados. La distribución de los distritos electorales
uninominales entre las entidades federativas se hará teniendo en cuenta el último censo general de
población, sin que en ningún caso la representación de una entidad federativa pueda ser menor de dos
diputados o diputadas de mayoría.
Para la elección de los 200 diputados y diputadas según el principio de representación proporcional y
el Sistema de Listas Regionales, se constituirán cinco circunscripciones electorales plurinominales en el
país conformadas de acuerdo con el principio de paridad, y encabezadas alternadamente entre mujeres y
hombres cada periodo electivo. La Ley determinará la forma de establecer la demarcación territorial de
estas circunscripciones.
         
                                                                                                  `;
    }
    if(numtar==54){
        document.getElementById("con").innerHTML=`
    Artículo 54. La elección de los 200 diputados según el principio de representación proporcional y el
sistema de asignación por listas regionales, se sujetará a las siguientes bases y a lo que disponga la ley:
         
                                                                                                  `;
    }
    if(numtar==55){

  document.getElementById("con").innerHTML=`
 Artículo 55. Para ser diputado se requiere:
Párrafo reformado DOF 29-01-2016
I. Ser ciudadano mexicano, por nacimiento, en el ejercicio de sus derechos.
II. Tener dieciocho años cumplidos el día de la elección;
Fracción reformada DOF 14-02-1972, 06-06-2023
III. Ser originario de la entidad federativa en que se haga la elección o vecino de esta con residencia
efectiva de más de seis meses anteriores a la fecha de ella.
Párrafo reformado DOF 29-01-2016
Para poder figurar en las listas de las circunscripciones electorales plurinominales como
candidato a diputado, se requiere ser originario de alguna de las entidades federativas que
comprenda la circunscripción en la que se realice la elección, o vecino de ella con residencia
efectiva de más de seis meses anteriores a la fecha en que la misma se celebre.
                                                                                        `;
    }
    if(numtar==56){

        document.getElementById("con").innerHTML=`
      Artículo 56. La Cámara de Senadores se integrará por ciento veintiocho senadoras y senadores, de
los cuales, en cada Estado y en la Ciudad de México, dos serán elegidos según el principio de votación
mayoritaria relativa y uno será asignado a la primera minoría. Para estos efectos, los partidos políticos
deberán registrar una lista con dos fórmulas de candidatos. La senaduría de primera minoría le será
asignada a la fórmula de candidaturas que encabece la lista del partido político que, por sí mismo, haya
ocupado el segundo lugar en número de votos en la entidad de que se trate.
Párrafo reformado DOF 29-01-2016, 06-06-2019
Las treinta y dos senadurías restantes serán elegidas según el principio de representación
proporcional, mediante el sistema de listas votadas en una sola circunscripción plurinominal nacional,
conformadas de acuerdo con el principio de paridad, y encabezadas alternadamente entre mujeres y
hombres cada periodo electivo. La ley establecerá las reglas y fórmulas para estos efectos.
Párrafo reformado DOF 06-06-2019
La Cámara de Senadores se renovará en su totalidad cada seis años.
Artículo reformado DOF 29-04-1
                 
                                                                                                          `;
    }
    if(numtar==57){

        document.getElementById("con").innerHTML=`
      Artículo 57. Por cada senador propietario se elegirá un suplente.
                   
                                                                                                            `;
    }
    if(numtar==58){

        document.getElementById("con").innerHTML=`
   Artículo 58. Para ser senador se requieren los mismos requisitos que para ser diputado, excepto el de
la edad, que será la de 25 años cumplidos el día de la elección.
                   
                                                                                                            `;
    }
    if(numtar==59){
        document.getElementById("con").innerHTML=`
        Artículo 59. Los Senadores podrán ser electos hasta por dos periodos consecutivos y los Diputados
al Congreso de la Unión hasta por cuatro periodos consecutivos. La postulación sólo podrá ser realizada
por el mismo partido o por cualquiera de los partidos integrantes de la coalición que los hubieren
postulado, salvo que hayan renunciado o perdido su militancia antes de la mitad de su mandato
                        
                                                                                                                 `;
    }
    if(numtar==60){
        document.getElementById("con").innerHTML=`
       Artículo 60. El organismo público previsto en el artículo 41 de esta Constitución, de acuerdo con lo
que disponga la ley, declarará la validez de las elecciones de diputados y senadores en cada uno de los
distritos electorales uninominales y en cada una de las entidades federativas; otorgará las constancias
respectivas a las fórmulas de candidatos que hubiesen obtenido mayoría de votos y hará la asignación de
senadores de primera minoría de conformidad con lo dispuesto en el artículo 56 de esta Constitución y en
la ley. Asimismo, hará la declaración de validez y la asignación de diputados según el principio de
representación proporcional de conformidad con el artículo 54 de esta Constitución y la ley.
Las determinaciones sobre la declaración de validez, el otorgamiento de las constancias y la
asignación de diputados o senadores podrán ser impugnadas ante las salas regionales del Tribunal
Electoral del Poder Judicial de la Federación, en los términos que señale la ley.
Párrafo reformado DOF 22-08-1996
Las resoluciones de las salas a que se refiere el párrafo anterior, podrán ser revisadas exclusivamente
por la Sala Superior del propio Tribunal, a través del medio de impugnación que los partidos políticos
podrán interponer únicamente cuando por los agravios esgrimidos se pueda modificar el resultado de la
elección. Los fallos de la Sala serán definitivos e inatacables. La ley establecerá los presupuestos,
requisitos de procedencia y el trámite para este medio de impugnación.
Párrafo reformado DOF 22-08-1996
Artículo reformado DOF 06-12-1977, 22-04-1981, 15-12-1986, 06-04-1990, 03-09-1993

                        
                                                                                                                 `;

    }
    if(numtar==61){

   document.getElementById("con").innerHTML=`
      Artículo 61. Los diputados y senadores son inviolables por las opiniones que manifiesten en el
desempeño de sus cargos, y jamás podrán ser reconvenidos por ellas.
El Presidente de cada Cámara velará por el respeto al fuero constitucional de los miembros de la
misma y por la inviolabilidad del recinto donde se reúnan a sesionar

                        
                                                                                                                 `;
    }
    if(numtar==62){
        document.getElementById("con").innerHTML=`
Artículo 62. Los diputados y senadores propietarios durante el período de su encargo, no podrán
desempeñar ninguna otra comisión o empleo de la Federación o de las entidades federativas por los
cuales se disfrute sueldo, sin licencia previa de la Cámara respectiva; pero entonces cesarán en sus
funciones representativas, mientras dure la nueva ocupación. La misma regla se observará con los
diputados y senadores suplentes, cuando estuviesen en ejercicio. La infracción de esta disposición será
castigada con la pérdida del carácter de diputado o senador.      
                                                                                                                   `;

    }
    if(numtar==63){

        document.getElementById("con").innerHTML=`
Artículo 63. Las Cámaras no pueden abrir sus sesiones ni ejercer su cargo sin la concurrencia, en
cada una de ellas, de más de la mitad del número total de sus miembros; pero los presentes de una y
otra deberán reunirse el día señalado por la ley y compeler a los ausentes a que concurran dentro de los
treinta días siguientes, con la advertencia de que si no lo hiciesen se entenderá por ese solo hecho, que
no aceptan su encargo, llamándose luego a los suplentes, los que deberán presentarse en un plazo igual,
y si tampoco lo hiciesen, se declarará vacante el puesto. Tanto las vacantes de diputados y senadores
                                                                                                                           `;

    }
    if(numtar==64){
        document.getElementById("con").innerHTML=`
Artículo 64. Los diputados y senadores que no concurran a una sesión, sin causa justificada o sin
permiso de la Cámara respectiva, no tendrán derecho a la dieta correspondiente al día en que falten.
                                                                                                                                   `;
    }
    if(numtar==65){
        document.getElementById("con").innerHTML=`
  Artículo 65. El Congreso se reunirá a partir del 1o. de septiembre de cada año para celebrar un
primer periodo de sesiones ordinarias, y a partir del 1o. de febrero para celebrar un segundo periodo de
sesiones ordinarias.

                                                                                                                                   `;

    }
    if(numtar==66){
        document.getElementById("con").innerHTML=`
   Artículo 66. Cada período de sesiones ordinarias durará el tiempo necesario para tratar todos los
asuntos mencionados en el artículo anterior. El primer período no podrá prolongarse sino hasta el 15 de
diciembre del mismo año, excepto cuando el Presidente de la República inicie su encargo en la fecha
prevista por el artículo 83, en cuyo caso las sesiones podrán extenderse hasta el 31 de diciembre de ese
mismo año. El segundo período no podrá prolongarse más allá del 30 de abril del mismo año
      
                                                                                                                                         `;
    }
    if(numtar==67){
        document.getElementById("con").innerHTML=`
       Artículo 67. El Congreso o una sola de las Cámaras, cuando se trate de asunto exclusivo de ella, se
reunirán en sesiones extraordinarias cada vez que los convoque para ese objeto la Comisión
Permanente; pero en ambos casos sólo se ocuparán del asunto o asuntos que la propia Comisión
sometiese a su conocimiento, los cuales se expresarán en la convocatoria respectiva.
           
                                                                                                                                              `;
    }
    if(numtar==68){
        document.getElementById("con").innerHTML=`
       Artículo 68. Las dos Cámaras residirán en un mismo lugar y no podrán trasladarse a otro sin que
antes convengan en la traslación y en el tiempo y modo de verificarla, designando un mismo punto para
la reunión de ambas. Pero si conviniendo las dos en la traslación, difieren en cuanto al tiempo, modo y
lugar, el Ejecutivo terminará la diferencia, eligiendo uno de los dos extremos en cuestión. Ninguna
Cámara podrá suspender sus sesiones por más de tres días, sin consentimiento de la otra.
           
                                                                                                                                              `;
    }
    if(numtar==69){
        document.getElementById("con").innerHTML=`
tículo 69.- En la apertura de Sesiones Ordinarias del Primer Periodo de cada año de ejercicio del
Congreso, el Presidente de la República presentará un informe por escrito, en el que manifieste el estado
general que guarda la administración pública del país. En la apertura de las sesiones extraordinarias del
Congreso de la Unión, o de una sola de sus cámaras, el Presidente de la Comisión Permanente
informará acerca de los motivos o razones que originaron la convocatoria.

            
                                                                                                                                               `;
    }
    if(numtar==70){
        
        document.getElementById("con").innerHTML=`
Artículo 70. Toda resolución del Congreso tendrá el carácter de ley o decreto. Las leyes o decretos se
comunicarán al Ejecutivo firmados por los presidentes de ambas Cámaras y por un secretario de cada
una de ellas, y se promulgarán en esta forma: "El Congreso de los Estados Unidos Mexicanos decreta:
(texto de la ley o decreto)".


            
                                                                                                                                               `;

    }
    if(numtar==71){
        document.getElementById("con").innerHTML=`
       Artículo 71. El derecho de iniciar leyes o decretos compete:
I. Al Presidente de la República;
II. A los Diputados y Senadores al Congreso de la Unión;
Fracción reformada DOF 09-08-2012
III. A las Legislaturas de los Estados y de la Ciudad de México; y
Fracción reformada DOF 09-08-2012, 29-01-2016
IV. A los ciudadanos en un número equivalente, por lo menos, al cero punto trece por ciento de la
lista nominal de electores, en los términos que señalen las leyes.
Fracción adicionada DOF 09-08-2012
La Ley del Congreso determinará el trámite que deba darse a las iniciativas.
Párrafo reformado DOF 17-08-2011, 09-08-2012
El día de la apertura de cada periodo ordinario de sesiones el Presidente de la República podrá
presentar hasta dos iniciativas para trámite preferente, o señalar con tal carácter hasta dos que hubiere
presentado en periodos anteriores, cuando estén pendientes de dictamen. Cada iniciativa deberá ser
discutida y votada por el Pleno de la Cámara de su origen en un plazo máximo de treinta días naturales.
Si no fuere así, la iniciativa, en sus términos y sin mayor trámite, será el primer asunto que deberá ser
discutido y votado en la siguiente sesión del Pleno. En caso de ser aprobado o modificado por la Cámara
de su origen, el respectivo proyecto de ley o decreto pasará de inmediato a la Cámara revisora, la cual
deberá discutirlo y votarlo en el mismo plazo y bajo las condiciones antes señaladas.
Párrafo adicionado DOF 09-08-2012
No podrán tener carácter preferente las iniciativas de adición o reforma a esta Constitución.
Párrafo adicionado DOF
        
        
                    
                                                                                                                                                       `;

    }
    if(numtar==72){
        document.getElementById("con").innerHTML=`
      Artículo 72. Todo proyecto de ley o decreto, cuya resolución no sea exclusiva de alguna de las
Cámaras, se discutirá sucesivamente en ambas, observándose la Ley del Congreso y sus reglamentos
respectivos, sobre la forma, intervalos y modo de proceder en las discusiones y votaciones:
         
         
                     
                                                                                                                                                        `;
    }
    if(numtar==73){
        document.getElementById("con").innerHTML=`
       Artículo 73. El Congreso tiene facultad:
Párrafo reformado DOF 24-10-1942, 10-02-1944
I. Para admitir nuevos Estados a la Unión Federal;
Fracción reformada DOF 08-10-1974
II. Derogada.
Fracción derogada DOF 08-10-1974
III. Para formar nuevos Estados dentro de los límites de los existentes, siendo necesario al
efecto:
1o. Que la fracción o fracciones que pidan erigirse en Estados, cuenten con una población
de ciento veinte mil habitantes, por lo menos.
2o. Que se compruebe ante el Congreso que tiene los elementos bastantes para proveer a
su existencia política.
3o. Que sean oídas las Legislaturas de las entidades federativas de cuyo territorio se trate,
sobre la conveniencia o inconveniencia de la erección del nuevo Estado, quedando
obligadas a dar su informe dentro de seis meses, contados desde el día en que se les
remita la comunicación respectiva.
Numeral reformado DOF 29-01-2016
4o. Que igualmente se oiga al Ejecutivo de la Federación, el cual enviará su informe dentro
de siete días contados desde la fecha en que le sea pedido.
5o. Que sea votada la erección del nuevo Estado por dos terceras partes de los diputados y
senadores presentes en sus respectivas Cámaras.
6o. Que la resolución del Congreso sea ratificada por la mayoría de las Legislaturas de las
entidades federativas, previo examen de la copia del expediente, siempre que hayan
dado su consentimiento las Legislaturas de las entidades federativas de cuyo territorio
se trate.
Numeral reformado DOF 29-01-2016
7o. Si las Legislaturas de las entidades federativas de cuyo territorio se trate, no hubieren
dado su consentimiento, la ratificación de que habla la fracción anterior, deberá ser
hecha por las dos terceras partes del total de Legislaturas de las demás entidades
federativas.
Numeral reformado DOF 29-01-2016
IV. Derogada.
Fe de erratas a la fracción DOF 06-02-1917. Derogada DOF 08-12-2005
V. Para cambiar la residencia de los Supremos Poderes de la Federación.
VI. Derogada;
Fracción reformada DOF 20-08-1928 (2 reformas), 15-12-1934, 14-12-1940, 21-09-1944, 19-02-1951. Fe de erratas DOF 14-03-1951.
Reformada DOF 08-10-1974, 06-12-1977, 28-12-1982, 10-08-1987, 06-04-1990, 25-10-1993. Derogada DOF 22-08-1996
VII. Para imponer las contribuciones necesarias a cubrir el Presupuesto.
           
           
                       
                                                                                                                                                          `;

    }
    if(numtar==74){
        document.getElementById("con").innerHTML=`
      Artículo 74. Son facultades exclusivas de la Cámara de Diputados:
                                                                                                                                                           `;
    }
    if(numtar==75){
        document.getElementById("con").innerHTML=`
       Artículo 75. La Cámara de Diputados, al aprobar el Presupuesto de Egresos, no podrá dejar de
señalar la retribución que corresponda a un empleo que esté establecido por la ley; y en caso de que por
cualquiera circunstancia se omita fijar dicha remuneración, se entenderá por señalada la que hubiere
tenido fijada en el Presupuesto anterior o en la ley que estableció el empleo.
En todo caso, dicho señalamiento deberá respetar las bases previstas en el artículo 127 de esta
Constitución y en las leyes que en la materia expida el Congreso General.
P
                                                                                                                                                             `;
      
    }
    if(numtar==76){
        document.getElementById("con").innerHTML=`
        Artículo 76. Son facultades exclusivas del Senado:
I. Analizar la política exterior desarrollada por el Ejecutivo Federal con base en los informes
anuales que el Presidente de la República y el Secretario del Despacho correspondiente rindan
al Congreso.
Además, aprobar los tratados internacionales y convenciones diplomáticas que el Ejecutivo
Federal suscriba, así como su decisión de terminar, denunciar, suspender, modificar, enmendar,
retirar reservas y formular declaraciones interpretativas sobre los mismos;
Fracción reformada DOF 06-12-1977, 12-02-2007
II. Ratificar los nombramientos que el mismo funcionario haga de los Secretarios de Estado, en
caso de que éste opte por un gobierno de coalición, con excepción de los titulares de los ramos
de Defensa Nacional y Marina; del Secretario responsable del control interno del Ejecutivo
Federal; del Secretario de Relaciones; de los embajadores y cónsules generales; de los
empleados superiores del ramo de Relaciones; de los integrantes de los órganos colegiados
encargados de la regulación en materia de telecomunicaciones, energía, competencia
económica, y coroneles y demás jefes superiores del Ejército, Armada y Fuerza Aérea
Nacionales, en los términos que la ley disponga;
Fracción reformada DOF 10-02-1944, 31-12-1994, 09-08-2012, 10-02-2014, 27-05-2015
III. Autorizarlo también para que pueda permitir la salida de tropas nacionales fuera de los límites
del País, el paso de tropas extranjeras por el territorio nacional y la estación de escuadras de
otra potencia, por más de un mes, en aguas mexicanas.
IV. Analizar y aprobar el informe anual que el Ejecutivo Federal le presente sobre las actividades de
la Guardia Nacional;
Fracción reformada DOF 08-10-1974, 29-01-2016, 26-03-2019
V. Declarar, cuando hayan desaparecido todos los poderes constitucionales de una entidad
federativa, que es llegado el caso de nombrarle un titular del poder ejecutivo provisional, quien
convocará a elecciones conforme a las leyes constitucionales de la entidad federativa. El
nombramiento del titular del poder ejecutivo local se hará por el Senado a propuesta en terna
del Presidente de la República con aprobación de las dos terceras partes de los miembros
presentes, y en los recesos, por la Comisión Permanente, conforme a las mismas reglas. El
funcionario así nombrado, no podrá ser electo titular del poder ejecutivo en las elecciones que
se verifiquen en virtud de la convocatoria que él expidiere. Esta disposición regirá siempre que
las constituciones de las entidades federativas no prevean el caso.
Fracción reformada DOF 29-01-2016
VI. Resolver las cuestiones políticas que surjan entre los poderes de una entidad federativa cuando
alguno de ellos ocurra con ese fin al Senado, o cuando con motivo de dichas cuestiones se
haya interrumpido el orden constitucional, mediando un conflicto de armas. En este caso el
Senado dictará su resolución, sujetándose a la Constitución General de la República y a la de la
entidad federativ
                                                                                                                                                              `;

    }
    if(numtar==77){
        document.getElementById("con").innerHTML=`
        Artículo 77. Cada una de las Cámaras puede, sin intervención de la otra:
I. Dictar resoluciones económicas relativas a su régimen interior.
II. Comunicarse en la Cámara colegisladora y con el Ejecutivo de la Unión, por medio de
comisiones de su seno.
III. Nombrar los empleados de su secretaría y hacer el reglamento interior de la misma.
IV. Expedir convocatoria, dentro del término de 30 días a partir de que ocurra la vacante, para
elecciones extraordinarias que deberán celebrarse dentro de los 90 días siguientes, con el fin de
cubrir las vacantes de sus miembros a que se refiere el artículo 63 de esta Constitución, en el
caso de vacantes de diputados y senadores del Congreso de la Unión por el principio de 
                                                                                                                                                              `;
    }
    if(numtar==78){
        document.getElementById("con").innerHTML=`
        Artículo 78. Durante los recesos del Congreso de la Unión habrá una Comisión Permanente
compuesta de 37 miembros de los que 19 serán Diputados y 18 Senadores, nombrados por sus
respectivas Cámaras la víspera de la clausura de los períodos ordinarios de sesiones. Para cada titular
las Cámaras nombrarán, de entre sus miembros en ejercicio, un sustituto.
La Comisión Permanente, además de las atribuciones que expresamente le confiere esta
Constitución, tendrá las siguientes:

                                                                                                                                                              `;
    }
    if(numtar==79){
        document.getElementById("con").innerHTML=`
       Artículo 79. La Auditoría Superior de la Federación de la Cámara de Diputados, tendrá autonomía
técnica y de gestión en el ejercicio de sus atribuciones y para decidir sobre su organización interna,
funcionamiento y resoluciones, en los términos que disponga la ley.

                                                                                                                                                              `;

    }
    if(numtar==80){
        document.getElementById("con").innerHTML=`
        Artículo 80. Se deposita el ejercicio del Supremo Poder Ejecutivo de la Unión en un solo individuo,
que se denominará "Presidente de los Estados Unidos Mexicanos."

 
                                                                                                                                                               `;
    }
    if(numtar==81){
        document.getElementById("con").innerHTML=`
       Artículo 81. La elección del presidente será directa y en los términos que disponga la ley electoral. El
cargo de presidente de los Estados Unidos Mexicanos puede ser revocado en los términos establecidos
en esta Constitución.
 
                                                                                                                                                               `;

    }
    if(numtar==82){
        document.getElementById("con").innerHTML=`
    Artículo 82. Para ser Presidente se requiere:
I. Ser ciudadano mexicano por nacimiento, en pleno goce de sus derechos, hijo de padre o madre
mexicanos y haber residido en el país al menos durante veinte años.
Fracción reformada DOF 01-07-1994
II. Tener 35 años cumplidos al tiempo de la elección;
III. Haber residido en el país durante todo el año anterior al día de la elección. La ausencia del país
hasta por treinta días, no interrumpe la residencia.
Fracción reformada DOF 20-08-1993
IV. No pertenecer al estado eclesiástico ni ser ministro de algún culto.
V. No estar en servicio activo, en caso de pertenecer al Ejército, seis meses antes del día de la
elección.
Fracción reformada DOF 08-01-1943
VI. No ser Secretario o subsecretario de Estado, Fiscal General de la República, ni titular del poder
ejecutivo de alguna entidad federativa, a menos de que se separe de su puesto seis meses antes
del día de la elección; y
Fracción reformada DOF 08-01-1943, 08-10-1974, 19-06-2007, 10-02-2014, 29-01-2016
VII. No estar comprendido en alguna de las causas de incapacidad establecidas en el artículo 83
  
                                                                                                                                                                `;

    }
    if(numtar==83){

 document.getElementById("con").innerHTML=`
Artículo 83. El Presidente entrará a ejercer su encargo el 1o. de octubre y durará en él seis años. El
ciudadano que haya desempeñado el cargo de Presidente de la República, electo popularmente, o con el
carácter de interino o sustituto, o asuma provisionalmente la titularidad del Ejecutivo Federal, en ningún
caso y por ningún motivo podrá volver a desempeñar ese puesto.
  
                                                                                                                                                                `;
    }
    if(numtar==84){

        document.getElementById("con").innerHTML=`
       Artículo 84. En caso de falta absoluta del Presidente de la República, en tanto el Congreso nombra al
presidente interino o substituto, lo que deberá ocurrir en un término no mayor a sesenta días, el
Secretario de Gobernación asumirá provisionalmente la titularidad del Poder Ejecutivo. En este caso no
será aplicable lo establecido en las fracciones II, III y VI del artículo 82 de esta Constitución.
          
                                                                                                                                                                        `;
    }
    if(numtar==85){
        document.getElementById("con").innerHTML=`
Artículo 85. Si antes de iniciar un periodo constitucional la elección no estuviese hecha o declarada
válida, cesará el Presidente cuyo periodo haya concluido y será presidente interino el que haya
designado el Congreso, en los términos del artículo anterior.
Párrafo reformado DOF 13-11-2007, 09-08-2012
Si al comenzar el periodo constitucional hubiese falta absoluta del Presidente de la República, asumirá
provisionalmente el cargo el Presidente de la Cámara de Senadores, en tanto el Congreso designa al
presidente interino, conforme al artículo anterior.
Párrafo reformado DOF 09-08-2012
Cuando el Presidente solicite licencia para separarse del cargo hasta por sesenta días naturales, una
vez autorizada por el Congreso, el Secretario de Gobernación asumirá provisionalmente la titularidad del
Poder Ejecutivo.
Párrafo reformado DOF 09-08-2012
Si la falta, de temporal se convierte en absoluta, se procederá como dispone el artículo anterior
           
                                                                                                                                                                         `;

    }
    if(numtar==86){
        document.getElementById("con").innerHTML=`
      Artículo 86. El cargo de Presidente de la República sólo es renunciable por causa grave, que
calificará el Congreso de la Unión, ante el que se presentará la renuncia
           
                                                                                                                                                                         `;
    }
    if(numtar==87){
        document.getElementById("con").innerHTML=`
       Artículo 87. El Presidente, al tomar posesión de su cargo, prestará ante el Congreso de la Unión o
ante la Comisión Permanente, en los recesos de aquél, la siguiente protesta: "Protesto guardar y hacer
guardar la Constitución Política de los Estados Unidos Mexicanos y las leyes que de ella emanen, y
desempeñar leal y patrióticamente el cargo de Presidente de la República que el pueblo me ha conferido,
mirando en todo por el bien y prosperidad de la Unión; y si así no lo hiciere que la Nación me lo
demande."

             
                                                                                                                                                                           `;

    }
    if(numtar==88){
        document.getElementById("con").innerHTML=`
       Artículo 88. El Presidente de la República podrá ausentarse del territorio nacional hasta por siete
días, informando previamente de los motivos de la ausencia a la Cámara de Senadores o a la Comisión
Permanente en su caso, así como de los resultados de las gestiones realizadas. En ausencias mayores a
siete días, se requerirá permiso de la Cámara de Senadores o de la Comisión Permanente
 
              
                                                                                                                                                                            `;
 

    }
    if(numtar==89){

    document.getElementById("con").innerHTML=`
       Artículo 89. Las facultades y obligaciones del Presidente, son las siguientes:
Párrafo reformado DOF 10-08-1987, 25-10-1993, 12-02-2007
I. Promulgar y ejecutar las leyes que expida el Congreso de la Unión, proveyendo en la esfera
administrativa a su exacta observancia.
II. Nombrar y remover libremente a los Secretarios de Estado, remover a los embajadores,
cónsules generales y empleados superiores de Hacienda, y nombrar y remover libremente a los
demás empleados de la Unión, cuyo nombramiento o remoción no esté determinado de otro
modo en la Constitución o en las leyes;
Los Secretarios de Estado y los empleados superiores de Hacienda y de Relaciones entrarán en
funciones el día de su nombramiento. Cuando no sean ratificados en los términos de esta
Constitución, dejarán de ejercer su encargo.
Párrafo adicionado DOF 10-02-2014
En los supuestos de la ratificación de los Secretarios de Relaciones y de Hacienda, cuando no
se opte por un gobierno de coalición, si la Cámara respectiva no ratificare en dos ocasiones el
nombramiento del mismo Secretario de Estado, ocupará el cargo la persona que designe el
Presidente de la República;
Párrafo adicionado DOF 10-02-2014
Fracción reformada DOF 08-10-1974, 10-08-1987, 25-10-1993, 31-12-1994, 09-08-2012
III. Nombrar, con aprobación del Senado, a los embajadores, cónsules generales, empleados
superiores de Hacienda y a los integrantes de los órganos colegiados encarg
 
              
                                                                                                                                                                            `;
    }
    if(numtar==90){
        

        document.getElementById("con").innerHTML=`
        Artículo 90. La Administración Pública Federal será centralizada y paraestatal conforme a la Ley
Orgánica que expida el Congreso, que distribuirá los negocios del orden administrativo de la Federación
que estarán a cargo de las Secretarías de Estado y definirá las bases generales de creación de las
entidades paraestatales y la intervención del Ejecutivo Federal en su operación.
  
               
                                                                                                                                                                             `;
    }
    if(numtar==91){
        document.getElementById("con").innerHTML=`
        Artículo 91. Para ser Secretario de Estado se requiere: ser ciudadano mexicano por nacimiento, estar
en ejercicio de sus derechos y tener veinticinco años cumplidos.
  
               
                                                                                                                                                                             `;

    }
    if(numtar==92){
        document.getElementById("con").innerHTML=`
       Artículo 92. Todos los reglamentos, decretos, acuerdos y órdenes del Presidente deberán estar
firmados por el Secretario de Estado a que el asunto corresponda, y sin este requisito no serán
obedecidos.
                                                                                                                                                                             `;
    }
    if(numtar==93){
        document.getElementById("con").innerHTML=`
    Artículo 93.- Los Secretarios del Despacho, luego que esté abierto el periodo de sesiones ordinarias,
darán cuenta al Congreso del estado que guarden sus respectivos ramos.
                                                                                                                                                                              `;
    }
    if(numtar==94){
        document.getElementById("con").innerHTML=`
     Artículo 94. Se deposita el ejercicio del Poder Judicial de la Federación en una Suprema Corte de
Justicia, en un Tribunal Electoral, en Plenos Regionales, en Tribunales Colegiados de Circuito, en
Tribunales Colegiados de Apelación y en Juzgados de Distrito
                                                                                                                                                                                  `;

    }
    if(numtar==95){
        document.getElementById("con").innerHTML=`
      Artículo 95. Para ser electo ministro de la Suprema Corte de Justicia de la Nación, se necesita:
Párrafo reformado DOF 02-08-2007
I. Ser ciudadano mexicano por nacimiento, en pleno ejercicio de sus derechos políticos y civiles.
II. Tener cuando menos treinta y cinco años cumplidos el día de la designación;
Fracción reformada DOF 15-12-1934, 31-12-1994
III. Poseer el día de la designación, con antigüedad mínima de diez años, título profesional de
licenciado en derecho, expedido por autoridad o institución legalmente facultada para ello;

                                                                                                                                                                                     `;
    }
    if(numtar==96){
        document.getElementById("con").innerHTML=`
        Artículo 96. Para nombrar a los Ministros de la Suprema Corte de Justicia, el Presidente de la
República someterá una terna a consideración del Senado, el cual, previa comparecencia de las
personas propuestas, designará al Ministro que deba cubrir la vacante. La designación se hará por el voto
de las dos terceras partes de los miembros del Senado presentes, dentro del improrrogable plazo de
treinta días. Si el Senado no resolviere dentro de dicho plazo, ocupará el cargo de Ministro la persona
que, dentro de dicha terna, designe el Presidente de la República.
  
                                                                                                                                                                                       `;
    }
    if(numtar==97){
        document.getElementById("con").innerHTML=`
        Artículo 97. Las Magistradas y los Magistrados de Circuito, así como las Juezas y los Jueces de
Distrito serán nombrados y adscritos por el Consejo de la Judicatura Federal, con base en criterios
objetivos y de acuerdo a los requisitos y procedimientos que establezcan las disposiciones aplicables.
Durarán seis años en el ejercicio de su encargo, al término de los cuales, si fueran ratificados, sólo
podrán ser privados de sus puestos en los casos y conforme a los procedimientos que establezca la ley.
  
                                                                                                                                                                                       `;
    }
    if(numtar==98){
        document.getElementById("con").innerHTML=`
    Artículo 98. Cuando la falta de un Ministro excediere de un mes, el Presidente de la República
someterá el nombramiento de un Ministro interino a la aprobación del Senado, observándose lo dispuesto
en el artículo 96 de esta Constitución.
Si faltare un Ministro por defunción o por cualquier causa de separación definitiva, el Presidente
someterá un nuevo nombramiento a la aprobación del Senado, en los términos del artículo 96 de esta
Constitución.
Las renuncias de los Ministros de la Suprema Corte de Justicia solamente procederán por causas
graves; serán sometidas al Ejecutivo y, si éste las acepta, las enviará para su aprobación al Senado.
  
                                                                                                                                                                                       `;

    }
    if(numtar==99){
        document.getElementById("con").innerHTML=`
    Artículo 99. El Tribunal Electoral será, con excepción de lo dispuesto en la fracción II del artículo 105
de esta Constitución, la máxima autoridad jurisdiccional en la materia y órgano especializado del Poder
Judicial de la Federación.
      
                                                                                                                                                                                           `;
    }
    if(numtar==100){
        document.getElementById("con").innerHTML=`
   Artículo 100. El Consejo de la Judicatura Federal será un órgano del Poder Judicial de la Federación
con independencia técnica, de gestión y para emitir sus resoluciones.
          
                                                                                                                                                                                               `;

    }
    if(numtar==101){
        document.getElementById("con").innerHTML=`
   Artículo 101. Los Ministros de la Suprema Corte de Justicia, los Magistrados de Circuito, los Jueces
de Distrito, los respectivos secretarios, y los Consejeros de la Judicatura Federal, así como los
Magistrados de la Sala Superior del Tribunal Electoral, no podrán, en ningún caso, aceptar ni
desempeñar empleo o encargo de la Federación, de las entidades federativas o de particulares, salvo los
cargos no remunerados en asociaciones científicas, docentes, literarias o de beneficencia.

          
                                                                                                                                                                                               `;

    }
    if(numtar==102){

    document.getElementById("con").innerHTML=`
  El Ministerio Público de la Federación se organizará en una Fiscalía General de la República
como órgano público autónomo, dotado de personalidad jurídica y patrimonio propio.
Párrafo reformado DOF 29-01-2016
Para que una persona pueda ser titular de la Fiscalía General de la República se requiere: ser
ciudadana mexicana por nacimiento, en ejercicio de sus derechos; tener cuando menos treinta y
cinco años cumplidos el día de la designación; contar, con antigüedad mínima de diez años, con
título profesional de licenciatura en derecho; gozar de buena reputación, y no haber sido
condenada por la comisión de delito doloso.
Párrafo reformado DOF 29-05-2023
El Fiscal General durará en su encargo nueve años, y será designado y removido conforme a lo
siguiente:

          
                                                                                                                                                                                               `;
    }
    if(numtar==103){
        document.getElementById("con").innerHTML=`
      Artículo 103. Los Tribunales de la Federación resolverán toda controversia que se suscite
I. Por normas generales, actos u omisiones de la autoridad que violen los derechos humanos
reconocidos y las garantías otorgadas para su protección por esta Constitución, así como por los
tratados internacionales de los que el Estado Mexicano sea parte;
II. Por normas generales o actos de la autoridad federal que vulneren o restrinjan la soberanía de
los Estados o la autonomía de la Ciudad de México, y
Fracción reformada DOF 29-01-2016
III. Por normas generales o actos de las autoridades de las entidades federativas que invadan la
esfera de competencia de la autoridad federal.
      
                
                                                                                                                                                                                                     `;

    }
    if(numtar==104){
        document.getElementById("con").innerHTML=`
      Artículo 104. Los Tribunales de la Federación conocerán:
I. De los procedimientos relacionados con delitos del orden federal;
        
                  
                                                                                                                                                                                                       `;
    }
    if(numtar==105){
        document.getElementById("con").innerHTML=`
      Artículo 105. La Suprema Corte de Justicia de la Nación conocerá, en los términos que señale la ley
reglamentaria, de los asuntos siguientes:
                                                                                                                                                                                                         `;
    }
    if(numtar==106){
        document.getElementById("con").innerHTML=`
     Artículo 106. Corresponde al Poder Judicial de la Federación, en los términos de la ley respectiva,
dirimir las controversias que, por razón de competencia, se susciten entre los Tribunales de la
Federación, entre éstos y los de las entidades federativas o entre los de una entidad federativa y otra.
                                                                                                                                                                                                           `;
    }
    if(numtar==107){
        document.getElementById("con").innerHTML=`
     Artículo 107. Las controversias de que habla el artículo 103 de esta Constitución, con excepción de
aquellas en materia electoral, se sujetarán a los procedimientos que determine la ley reglamentaria, de
acuerdo con las bases siguientes:

                                                                                                                                                                                                              `;
    }
    if(numtar==108){
        document.getElementById("con").innerHTML=`
        Artículo 108. Para los efectos de las responsabilidades a que alude este Título se reputarán como
servidores públicos a los representantes de elección popular, a los miembros del Poder Judicial de la
Federación, los funcionarios y empleados y, en general, a toda persona que desempeñe un empleo,
cargo o comisión de cualquier naturaleza en el Congreso de la Unión o en la Administración Pública
Federal, así como a los servidores públicos de los organismos a los que esta Constitución otorgue
autonomía, quienes serán responsables por los actos u omisiones en que incurran en el desempeño de
sus respectivas funciones.
   
                                                                                                                                                                                                                 `;

    }
    if(numtar==109){

  document.getElementById("con").innerHTML=`
       Artículo 109. Los servidores públicos y particulares que incurran en responsabilidad frente al Estado,
serán sancionados conforme a lo siguiente:

  `;
    }
    if(numtar==110){
        document.getElementById("con").innerHTML=`
    Artículo 110. Podrán ser sujetos de juicio político los senadores y diputados al Congreso de la Unión,
los ministros de la Suprema Corte de Justicia de la Nación, los consejeros de la Judicatura Federal, los
secretarios de Despacho, el Fiscal General de la República, los magistrados de Circuito y jueces de
Distrito, el consejero Presidente, los consejeros electorales y el secretario ejecutivo del Instituto Nacional
Electoral, los magistrados del Tribunal Electoral, los integrantes de los órganos constitucionales
autónomos, los directores generales y sus equivalentes de los organismos descentralizados, empresas
de participación estatal mayoritaria, sociedades y asociaciones asimiladas a éstas y fideicomisos
públicos.
 
   `;


    }
    if(numtar==111){

    }
    if(numtar==112){

    }
    if(numtar==113){

    }
    if(numtar==114){

    }
    if(numtar==115){

    }
    if(numtar==116){

    } 
    if(numtar==117){

    }
    if(numtar==118){

    }
    if(numtar==119){

    }
    if(numtar==120){

    }
    if(numtar==121){

    }
    if(numtar==122){

    }
    if(numtar==123){

    }
    if(numtar==124){

    }
    if(numtar==125){

    }
    if(numtar==126){

    }
    if(numtar==127){

    }
    if(numtar==128){

    }
    if(numtar==129){

    }
    if(numtar==130){

    }
    if(numtar==131){

    }
    if(numtar==132){

    }
    if(numtar==133){

    }
    if(numtar==134){

    }
    if(numtar==135){

    }
    if(numtar==136){

    }


}