// Datos de los episodios con historias conectadas
const episodes = [
    {
        id: 1,
        title: "El recreo y los groups",
        situation: "En el recreo, Sofía quiere jugar a la mancha con Lucas, Mateo y Valentina, pero ellos le dicen que no la dejan participar.",
        decisions: [
            {
                id: "ignorar",
                icon: "🙈",
                text: "Ignorar a Sofía",
                isGood: false,
                result: "Esta decisión no es la mejor. Cuando ignoramos a alguien que quiere jugar, esa persona se siente triste y sola. En el aula, todos merecemos ser incluidos.",
                reflection: [
                    "¿Cómo se siente Sofía cuando la ignoran?",
                    "¿Alguna vez te sentiste solo?",
                    "¿Qué podemos hacer para incluir a otros?"
                ]
            },
            {
                id: "incluir",
                icon: "🤝",
                text: "Incluir a Sofía en el juego",
                isGood: true,
                result: "¡Excelente elección! Al incluir a Sofía, todos pueden jugar juntos y nadie se siente mal. Cuando incluimos a los demás, el recreo es más divertido para todos. Aprendemos que la amistad crece cuando somos amables con todos.",
                reflection: [
                    "¿Cómo se siente Sofía cuando la incluyen?",
                    "¿Cómo se sienten los demás cuando todos juegan juntos?",
                    "¿Qué podemos hacer si vemos a alguien solo en el recreo?"
                ]
            },
            {
                id: "pedir-ayuda",
                icon: "👩‍🏫",
                text: "Pedir ayuda a la maestra",
                isGood: true,
                result: "¡Buena decisión! Pedir ayuda a la maestra cuando no sabemos qué hacer es una opción muy responsable. A veces los adultos pueden ayudarnos a resolver conflictos de mejor manera. También podríamos intentar incluir a Sofía por nuestra cuenta.",
                reflection: [
                    "¿Cuándo es bueno pedir ayuda?",
                    "¿A quién podemos acudir en la escuela?",
                    "¿Qué podemos hacer antes de pedir ayuda?"
                ]
            }
        ],
        svg: createSVGScene1()
    },
    {
        id: 2,
        title: "Una burla en el aula",
        situation: "Durante la clase, Lucas se burla de la ropa que Mateo trae puesta. Mateo se pone muy triste y no quiere participar más.",
        decisions: [
            {
                id: "reirse",
                icon: "😂",
                text: "Reírse con Lucas",
                isGood: false,
                result: "Esta decisión lastima a Mateo. Cuando nos reímos de alguien, le hacemos sentir mal y eso no está bien. La ropa no define a las personas, lo importante es cómo somos por dentro.",
                reflection: [
                    "¿Cómo se siente Mateo cuando se ríen de él?",
                    "¿Importa la ropa para ser amigos?",
                    "¿Qué podemos hacer si alguien se burla de otro?"
                ]
            },
            {
                id: "defender",
                icon: "🛡️",
                text: "Defender a Mateo",
                isGood: true,
                result: "¡Muy bien! Al defender a Mateo, le mostramos que no está solo. Defender a alguien que está siendo lastimado es un acto de valentía y amistad. Todos merecemos ser tratados con respeto.",
                reflection: [
                    "¿Cómo se siente Mateo cuando lo defienden?",
                    "¿Qué podemos decir para defender a alguien?",
                    "¿Por qué es importante defender a los demás?"
                ]
            },
            {
                id: "decir-maestra",
                icon: "👩‍🏫",
                text: "Contarle a la maestra",
                isGood: true,
                result: "¡Excelente! Contarle a la maestra es la forma correcta de actuar cuando alguien está siendo lastimado. Los adultos pueden ayudar a resolver la situación y enseñar a Lucas que burlarse no está bien.",
                reflection: [
                    "¿Cuándo debemos contarle a un adulto?",
                    "¿Cómo nos sentimos al hacer lo correcto?",
                    "¿Qué puede hacer la maestra para ayudar?"
                ]
            }
        ],
        svg: createSVGScene2()
    },
    {
        id: 3,
        title: "El empujón accidental",
        situation: "Valentina está corriendo en el pasillo y sin querer empuja a Sofía. Sofía se cae y se lastima la rodilla. Valentina se siente muy mal.",
        decisions: [
            {
                id: "ignorar",
                icon: "🙈",
                text: "Ignorar y seguir corriendo",
                isGood: false,
                result: "Esta decisión no es correcta. Aunque fue un accidente, Sofía está lastimada y necesita ayuda. Ignorarla la hará sentir que no nos importa su bienestar.",
                reflection: [
                    "¿Cómo se siente Sofía cuando la ignoran?",
                    "¿Qué debemos hacer cuando alguien se lastima?",
                    "¿Importa si fue un accidente o intencional?"
                ]
            },
            {
                id: "ayudar",
                icon: "🩹",
                text: "Ayudar a Sofía y pedir perdón",
                isGood: true,
                result: "¡Perfecto! Al ayudar a Sofía y pedir perdón, Valentina muestra que se preocupa. Los accidentes pasan, pero lo importante es cómo reaccionamos. Pedir perdón y ayudar demuestra madurez y empatía.",
                reflection: [
                    "¿Cómo se siente Sofía cuando la ayudan?",
                    "¿Por qué es importante pedir perdón?",
                    "¿Qué podemos hacer para ayudar a alguien que se lastimó?"
                ]
            },
            {
                id: "buscar-ayuda",
                icon: "👩‍🏫",
                text: "Buscar a la maestra para que ayude",
                isGood: true,
                result: "¡Muy buena decisión! Cuando alguien se lastima, es importante buscar ayuda de un adulto. La maestra puede asistir a Sofía y enseñar a todos a caminar con cuidado en el pasillo.",
                reflection: [
                    "¿Cuándo debemos buscar ayuda de un adulto?",
                    "¿Qué podemos hacer mientras llega ayuda?",
                    "¿Cómo podemos prevenir accidentes en el pasillo?"
                ]
            }
        ],
        svg: createSVGScene3()
    },
    {
        id: 4,
        title: "El dibujo roto",
        situation: "Durante la hora de arte, alguien rompe el dibujo que Lucas había hecho con mucho esmero. Lucas está muy triste y enojado.",
        decisions: [
            {
                id: "ignorar",
                icon: "🙈",
                text: "No hacer nada",
                isGood: false,
                result: "Esta decisión no ayuda a nadie. Ignorar que rompieron el dibujo de Lucas hace que se sienta solo y sin apoyo. Todos necesitamos que nos defiendan cuando nos lastiman.",
                reflection: [
                    "¿Cómo se siente Lucas cuando nadie lo apoya?",
                    "¿Qué sentimos cuando rompen algo nuestro?",
                    "¿Por qué es importante defender a los demás?"
                ]
            },
            {
                id: "animar",
                icon: "🎨",
                text: "Animar a Lucas a hacer otro dibujo",
                isGood: true,
                result: "¡Qué linda actitud! Animar a Lucas a hacer otro dibujo le ayuda a sentirse mejor. Aunque no recuperemos el dibujo original, podemos mostrarle que su esfuerzo vale y que puede crear algo nuevo y hermoso.",
                reflection: [
                    "¿Cómo se siente Lucas cuando lo animan?",
                    "¿Qué podemos hacer cuando algo se rompe?",
                    "¿Por qué es importante apoyar a los amigos?"
                ]
            },
            {
                id: "reconocer",
                icon: "✋",
                text: "Reconocer quien lo rompió y pedir perdón",
                isGood: true,
                result: "¡Muy valiente! Reconocer el error y pedir perdón es lo correcto. Aunque no podemos arreglar el dibujo, podemos arreglar el daño emocional. Pedir perdón sincero ayuda a sanar las heridas.",
                reflection: [
                    "¿Qué sentimos cuando pedimos perdón?",
                    "¿Cómo se siente Lucas cuando le piden perdón?",
                    "¿Por qué es importante reconocer nuestros errores?"
                ]
            }
        ],
        svg: createSVGScene4()
    },
    {
        id: 5,
        title: "Nadie me elige",
        situation: "En educación física, el profesor pide formar equipos. Nadie elige a Mateo y queda solo. Todos los demás ya tienen equipo.",
        decisions: [
            {
                id: "ignorar",
                icon: "🙈",
                text: "Dejar que se quede solo",
                isGood: false,
                result: "Esta decisión lastima mucho a Mateo. Quedarse solo cuando todos tienen equipo hace sentir excluido y triste. En el aula, todos deben tener oportunidad de participar.",
                reflection: [
                    "¿Cómo se siente Mateo cuando nadie lo elige?",
                    "¿Alguna vez te sentiste excluido?",
                    "¿Qué podemos hacer para incluir a todos?"
                ]
            },
            {
                id: "invitar",
                icon: "🤝",
                text: "Invitar a Mateo a mi equipo",
                isGood: true,
                result: "¡Increíble! Al invitar a Mateo a tu equipo, le das la oportunidad de participar y disfrutar. Incluir a alguien que está solo es un acto de amabilidad que puede cambiar su día completamente.",
                reflection: [
                    "¿Cómo se siente Mateo cuando lo invitan?",
                    "¿Por qué es importante incluir a todos?",
                    "¿Qué podemos hacer para que nadie quede solo?"
                ]
            },
            {
                id: "proponer",
                icon: "💡",
                text: "Proponer equipos mezclados",
                isGood: true,
                result: "¡Excelente idea! Proponer que se mezclen los equipos para que nadie quede solo es una solución muy justa. Esto garantiza que todos puedan participar y nadie se sienta excluido.",
                reflection: [
                    "¿Por qué es importante que todos participen?",
                    "¿Qué otras formas hay de hacer equipos justos?",
                    "¿Cómo nos sentimos cuando todos son incluidos?"
                ]
            }
        ],
        svg: createSVGScene5()
    },
    {
        id: 6,
        title: "El secreto compartido",
        situation: "Sofía le cuenta un secreto personal a Valentina. Pero Valentina se lo cuenta a otros compañeros del aula. Sofía se siente traicionada.",
        decisions: [
            {
                id: "difundir",
                icon: "📢",
                text: "Contar el secreto a más gente",
                isGood: false,
                result: "Esta decisión empeora la situación. Contar el secreto a más gente lastima más a Sofía y rompe su confianza. Los secretos personales deben respetarse y no compartirse sin permiso.",
                reflection: [
                    "¿Cómo se siente Sofía cuando cuentan su secreto?",
                    "¿Qué es un secreto?",
                    "¿Por qué es importante respetar la privacidad?"
                ]
            },
            {
                id: "defender",
                icon: "🛡️",
                text: "Defender a Sofía y pedir que no cuenten más",
                isGood: true,
                result: "¡Muy bien! Al defender a Sofía y pedir que dejen de contar su secreto, le mostramos apoyo. Defender la privacidad de los demás es importante y demuestra respeto y lealtad.",
                reflection: [
                    "¿Cómo se siente Sofía cuando la defienden?",
                    "¿Qué podemos decir para defender a alguien?",
                    "¿Por qué es importante respetar los secretos?"
                ]
            },
            {
                id: "pedir-perdon",
                icon: "💔",
                text: "Ayudar a Valentina a pedir perdón",
                isGood: true,
                result: "¡Sabia decisión! Ayudar a Valentina a reconocer su error y pedir perdón a Sofía puede reparar la confianza. Pedir perdón sincero es el primer paso para sanar una relación dañada.",
                reflection: [
                    "¿Qué sentimos cuando traicionamos la confianza?",
                    "¿Cómo podemos pedir perdón de verdad?",
                    "¿Qué podemos hacer para recuperar la confianza?"
                ]
            }
        ],
        svg: createSVGScene6()
    },
    {
        id: 7,
        title: "Ayudando al nuevo compañero",
        situation: "Hoy llegó un niño nuevo al aula, se llama Tomás. No conoce a nadie y se siente solo. Algunos chicos lo miran raro porque no se parece a ellos.",
        decisions: [
            {
                id: "ignorar",
                icon: "🙈",
                text: "No hacer nada, que se adapte solo",
                isGood: false,
                result: "Esta decisión hace que Tomás se sienta más solo y rechazado. Llegar a un lugar nuevo es difícil, y cuando nadie nos ayuda, nos sentimos fuera de lugar. Todos merecemos una cálida bienvenida.",
                reflection: [
                    "¿Cómo se siente Tomás cuando lo ignoran?",
                    "¿Alguna vez fuiste nuevo en algún lugar?",
                    "¿Qué podemos hacer para recibir a alguien nuevo?"
                ]
            },
            {
                id: "presentar",
                icon: "👋",
                text: "Presentarme y presentarlo a los demás",
                isGood: true,
                result: "¡Qué hermoso gesto! Al presentarte y presentar a Tomás a los demás, lo ayudas a integrarse. Conocer a nuevos compañeros es el primer paso para hacer amigos y sentirse parte del grupo.",
                reflection: [
                    "¿Cómo se siente Tomás cuando lo presentan?",
                    "¿Por qué es importante recibir a los nuevos?",
                    "¿Qué podemos hacer para que se sienta bienvenido?"
                ]
            },
            {
                id: "invitar",
                icon: "🎮",
                text: "Invitarlo a jugar en el recreo",
                isGood: true,
                result: "¡Perfecto! Invitar a Tomás a jugar en el recreo es la mejor forma de hacer que se sienta incluido. Jugar juntos ayuda a conocerse mejor y crea lazos de amistad desde el primer día.",
                reflection: [
                    "¿Cómo se siente Tomás cuando lo invitan a jugar?",
                    "¿Qué juegos podemos proponer?",
                    "¿Por qué es importante incluir a los nuevos?"
                ]
            }
        ],
        svg: createSVGScene7()
    },
    {
        id: 8,
        title: "La fiesta de cumpleaños",
        situation: "Sofía va a cumplir años y quiere invitar a todos sus compañeros del aula a su fiesta. Pero no está segura si invitar a todos o solo a algunos.",
        decisions: [
            {
                id: "selectivo",
                icon: "🎯",
                text: "Invitar solo a sus mejores amigos",
                isGood: false,
                result: "Esta decisión puede lastimar a los que no son invitados. Aunque es la fiesta de Sofía, dejar afuera a algunos compañeros puede hacerlos sentir excluidos y tristes. Incluir a todos crea un ambiente más armónico.",
                reflection: [
                    "¿Cómo se sienten los que no son invitados?",
                    "¿Por qué es importante incluir a todos?",
                    "¿Qué pasa cuando excluimos a algunos?"
                ]
            },
            {
                id: "todos",
                icon: "🎉",
                text: "Invitar a todo el curso",
                isGood: true,
                result: "¡Qué decisión más generosa! Al invitar a todo el curso, Sofía demuestra que valora a todos sus compañeros. Una fiesta donde todos están invitada es más divertida y fortalece los lazos del grupo.",
                reflection: [
                    "¿Cómo se sienten todos cuando son invitados?",
                    "¿Por qué es bueno incluir a todos?",
                    "¿Qué podemos aprender de Sofía?"
                ]
            },
            {
                id: "dialogar",
                icon: "💬",
                text: "Hablar con sus padres y decidir juntos",
                isGood: true,
                result: "¡Muy maduro! Hablar con sus padres antes de decidir es lo correcto. Juntos pueden evaluar si es posible invitar a todos y encontrar la mejor solución. Dialogar en familia ayuda a tomar decisiones justas.",
                reflection: [
                    "¿Por qué es importante hablar con la familia?",
                    "¿Qué podemos hacer si no podemos invitar a todos?",
                    "¿Cómo podemos ser justos en estas situaciones?"
                ]
            }
        ],
        svg: createSVGScene8()
    }
];

// Estado del juego
let currentEpisode = 1;
let completedEpisodes = [1];
let lastDecision = null;

// Funciones de SVG para crear escenas ilustradas
function createSVGScene1() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#B0E0E6;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#90EE90;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de patio con gradiente -->
            <rect x="0" y="0" width="400" height="300" fill="url(#skyGradient)"/>
            <rect x="0" y="200" width="400" height="100" fill="url(#grassGradient)"/>
            
            <!-- Nubes -->
            <g fill="white" opacity="0.9">
                <ellipse cx="80" cy="50" rx="40" ry="20"/>
                <ellipse cx="100" cy="45" rx="35" ry="18"/>
                <ellipse cx="60" cy="55" rx="30" ry="15"/>
                
                <ellipse cx="280" cy="70" rx="45" ry="22"/>
                <ellipse cx="300" cy="65" rx="38" ry="19"/>
                <ellipse cx="260" cy="75" rx="32" ry="16"/>
            </g>
            
            <!-- Sol con rayos -->
            <circle cx="350" cy="50" r="25" fill="url(#sunGradient)"/>
            <g stroke="#FFD700" stroke-width="3">
                <line x1="350" y1="15" x2="350" y2="5"/>
                <line x1="350" y1="85" x2="350" y2="95"/>
                <line x1="315" y1="50" x2="305" y2="50"/>
                <line x1="385" y1="50" x2="395" y2="50"/>
                <line x1="325" y1="25" x2="318" y2="18"/>
                <line x1="375" y1="75" x2="382" y2="82"/>
                <line x1="325" y1="75" x2="318" y2="82"/>
                <line x1="375" y1="25" x2="382" y2="18"/>
            </g>
            
            <!-- Árboles -->
            <g transform="translate(30, 180)">
                <rect x="-5" y="0" width="10" height="40" fill="#8B4513"/>
                <ellipse cx="0" cy="-15" rx="25" ry="30" fill="#228B22"/>
                <ellipse cx="-10" cy="-5" rx="15" ry="20" fill="#32CD32"/>
                <ellipse cx="10" cy="-5" rx="15" ry="20" fill="#32CD32"/>
            </g>
            
            <g transform="translate(370, 185)">
                <rect x="-5" y="0" width="10" height="35" fill="#8B4513"/>
                <ellipse cx="0" cy="-12" rx="22" ry="27" fill="#228B22"/>
                <ellipse cx="-8" cy="-3" rx="13" ry="18" fill="#32CD32"/>
                <ellipse cx="8" cy="-3" rx="13" ry="18" fill="#32CD32"/>
            </g>
            
            <!-- Flores en el pasto -->
            <g>
                <circle cx="50" cy="250" r="5" fill="#FF69B4"/>
                <circle cx="150" cy="260" r="4" fill="#FFD700"/>
                <circle cx="250" cy="255" r="5" fill="#FF69B4"/>
                <circle cx="350" cy="265" r="4" fill="#FFD700"/>
                <circle cx="100" cy="275" r="3" fill="#FF69B4"/>
                <circle cx="300" cy="270" r="4" fill="#FFD700"/>
            </g>
            
            <!-- Personaje 1 - Lucas (azul) -->
            <g transform="translate(100, 175)">
                <!-- Cabello -->
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#8B4513"/>
                <!-- Cabeza -->
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <!-- Ojos -->
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <!-- Sonrisa -->
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <!-- Cuerpo con remera -->
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#4169E1"/>
                <rect x="-12" y="16" width="24" height="8" fill="#1E90FF"/>
                <!-- Brazos -->
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <!-- Piernas -->
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <!-- Zapatos -->
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Personaje 2 - Mateo (rojo) -->
            <g transform="translate(160, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#FFD700"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF6347"/>
                <rect x="-12" y="16" width="24" height="8" fill="#DC143C"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#4169E1"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#4169E1"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Personaje 3 - Valentina (verde) -->
            <g transform="translate(220, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B0000"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#32CD32"/>
                <rect x="-12" y="16" width="24" height="8" fill="#228B22"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#FF1493"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#FF1493"/>
            </g>
            
            <!-- Sofía sola y triste (rosa) -->
            <g transform="translate(310, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <!-- Cara triste -->
                <path d="M -5 8 Q 0 4 5 8" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <!-- Lágrima -->
                <ellipse cx="8" cy="2" rx="2" ry="4" fill="#87CEEB"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF69B4"/>
                <rect x="-12" y="16" width="24" height="8" fill="#FF1493"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#9370DB"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#9370DB"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#4B0082"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#4B0082"/>
            </g>
            
            <!-- Burbuja de diálogo con sombra -->
            <g transform="translate(235, 100)">
                <ellipse cx="5" cy="5" rx="65" ry="35" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="65" ry="35" fill="white" stroke="#333" stroke-width="3"/>
                <polygon points="35,28 48,55 58,28" fill="white" stroke="#333" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">¡No te dejamos jugar!</text>
            </g>
        </svg>
    `;
}

function createSVGScene2() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="wallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFF8DC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="floorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#DEB887;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#D2691E;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de aula -->
            <rect x="0" y="0" width="400" height="300" fill="url(#wallGradient)"/>
            <rect x="0" y="200" width="400" height="100" fill="url(#floorGradient)"/>
            
            <!-- Pizarrón con marco -->
            <rect x="45" y="25" width="310" height="110" fill="#8B4513" rx="5"/>
            <rect x="55" y="35" width="290" height="90" fill="#2F4F4F" rx="3"/>
            <!-- Texto en pizarrón -->
            <text x="200" y="65" text-anchor="middle" font-size="14" fill="white">CLASE DE MATEMÁTICAS</text>
            <text x="200" y="90" text-anchor="middle" font-size="12" fill="#87CEEB">2 + 3 = ?</text>
            
            <!-- Ventana -->
            <g transform="translate(320, 80)">
                <rect x="0" y="0" width="60" height="70" fill="#87CEEB" stroke="#8B4513" stroke-width="4"/>
                <line x1="30" y1="0" x2="30" y2="70" stroke="#8B4513" stroke-width="3"/>
                <line x1="0" y1="35" x2="60" y2="35" stroke="#8B4513" stroke-width="3"/>
            </g>
            
            <!-- Lucas burlándose -->
            <g transform="translate(120, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <!-- Cara riéndose -->
                <path d="M -8 10 Q 0 15 8 10" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF4500"/>
                <rect x="-12" y="16" width="24" height="8" fill="#DC143C"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Mateo triste con ropa diferente -->
            <g transform="translate(200, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#FFD700"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <!-- Cara muy triste -->
                <path d="M -5 8 Q 0 4 5 8" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <!-- Lágrimas -->
                <ellipse cx="-8" cy="2" rx="2" ry="4" fill="#87CEEB"/>
                <ellipse cx="8" cy="2" rx="2" ry="4" fill="#87CEEB"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#9370DB"/>
                <rect x="-12" y="16" width="24" height="8" fill="#8B008B"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#FF8C00"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#FF8C00"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Burbuja de burla con sombra -->
            <g transform="translate(160, 95)">
                <ellipse cx="5" cy="5" rx="75" ry="38" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="75" ry="38" fill="white" stroke="#FF0000" stroke-width="3"/>
                <polygon points="38,30 52,58 62,30" fill="white" stroke="#FF0000" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#FF0000">¡Mirá esa ropa ridícula!</text>
            </g>
        </svg>
    `;
}

function createSVGScene3() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="hallwayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#E6E6FA;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#D8BFD8;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de pasillo -->
            <rect x="0" y="0" width="400" height="300" fill="url(#hallwayGradient)"/>
            <rect x="0" y="250" width="400" height="50" fill="#D3D3D3"/>
            
            <!-- Líneas del piso -->
            <line x1="0" y1="250" x2="400" y2="250" stroke="#A9A9A9" stroke-width="2"/>
            
            <!-- Puertas con detalles -->
            <g transform="translate(30, 100)">
                <rect x="0" y="0" width="60" height="100" fill="#8B4513" rx="3"/>
                <rect x="5" y="5" width="50" height="90" fill="#A0522D"/>
                <circle cx="50" cy="50" r="4" fill="#FFD700"/>
            </g>
            
            <g transform="translate(310, 100)">
                <rect x="0" y="0" width="60" height="100" fill="#8B4513" rx="3"/>
                <rect x="5" y="5" width="50" height="90" fill="#A0522D"/>
                <circle cx="50" cy="50" r="4" fill="#FFD700"/>
            </g>
            
            <!-- Cuadro en la pared -->
            <g transform="translate(170, 40)">
                <rect x="0" y="0" width="60" height="50" fill="#FFB6C1" stroke="#8B4513" stroke-width="3"/>
                <circle cx="30" cy="25" r="15" fill="#FFD700"/>
            </g>
            
            <!-- Valentina corriendo -->
            <g transform="translate(140, 170)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B0000"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <!-- Cara preocupada -->
                <ellipse cx="0" cy="5" rx="5" ry="3" fill="#4A4A4A"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF1493"/>
                <rect x="-12" y="16" width="24" height="8" fill="#C71585"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#FF1493"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#FF1493"/>
            </g>
            
            <!-- Sofía caída -->
            <g transform="translate(260, 195)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <!-- Cara de dolor -->
                <path d="M -5 8 Q 0 4 5 8" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <!-- Lágrima -->
                <ellipse cx="8" cy="2" rx="2" ry="4" fill="#87CEEB"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#1E90FF"/>
                <rect x="-12" y="16" width="24" height="8" fill="#4169E1"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#9370DB"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#9370DB"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#4B0082"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#4B0082"/>
                <!-- Rodilla lastimada -->
                <circle cx="15" cy="55" r="6" fill="#FF6347"/>
                <circle cx="15" cy="55" r="3" fill="#FF4500"/>
            </g>
            
            <!-- Líneas de movimiento -->
            <g stroke="#87CEEB" stroke-width="3" stroke-dasharray="8,8">
                <line x1="120" y1="170" x2="180" y2="170"/>
                <line x1="125" y1="175" x2="185" y2="175"/>
            </g>
        </svg>
    `;
}

function createSVGScene4() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="artRoomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFFACD;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de clase de arte -->
            <rect x="0" y="0" width="400" height="300" fill="url(#artRoomGradient)"/>
            <rect x="0" y="220" width="400" height="80" fill="#F5DEB3"/>
            
            <!-- Pizarrón con dibujos -->
            <rect x="50" y="30" width="300" height="80" fill="#FFB6C1" stroke="#8B4513" stroke-width="4"/>
            <circle cx="100" cy="70" r="20" fill="#FFD700"/>
            <rect x="150" y="50" width="40" height="40" fill="#32CD32"/>
            <polygon points="250,50 270,90 230,90" fill="#FF6347"/>
            
            <!-- Mesa con dibujo roto -->
            <g transform="translate(150, 160)">
                <rect x="0" y="0" width="100" height="10" fill="#8B4513"/>
                <rect x="10" y="10" width="5" height="50" fill="#8B4513"/>
                <rect x="85" y="10" width="5" height="50" fill="#8B4513"/>
                <!-- Dibujo roto -->
                <rect x="20" y="-30" width="60" height="40" fill="white" stroke="#333" stroke-width="2"/>
                <line x1="50" y1="-30" x2="50" y2="10" stroke="#FF0000" stroke-width="4"/>
                <!-- Parte del dibujo -->
                <circle cx="35" cy="-10" r="10" fill="#FFD700"/>
                <rect x="55" y="-20" width="15" height="15" fill="#32CD32"/>
            </g>
            
            <!-- Lucas triste -->
            <g transform="translate(100, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 8 Q 0 4 5 8" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <ellipse cx="8" cy="2" rx="2" ry="4" fill="#87CEEB"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF8C00"/>
                <rect x="-12" y="16" width="24" height="8" fill="#FF4500"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Lápiz -->
            <g transform="translate(260, 175) rotate(-30)">
                <rect x="0" y="0" width="50" height="10" fill="#FFD700"/>
                <polygon points="50,0 65,5 50,10" fill="#FFD700"/>
                <rect x="55" y="3" width="8" height="4" fill="#FFB6C1"/>
            </g>
            
            <!-- Burbuja de tristeza -->
            <g transform="translate(70, 95)">
                <ellipse cx="5" cy="5" rx="65" ry="35" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="65" ry="35" fill="white" stroke="#333" stroke-width="3"/>
                <polygon points="35,28 48,55 58,28" fill="white" stroke="#333" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">¡Mi dibujo! 😢</text>
            </g>
        </svg>
    `;
}

function createSVGScene5() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gymGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#B0E0E6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#87CEEB;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de gimnasio -->
            <rect x="0" y="0" width="400" height="300" fill="url(#gymGradient)"/>
            <rect x="0" y="220" width="400" height="80" fill="#98FB98"/>
            
            <!-- Líneas de cancha -->
            <line x1="0" y1="220" x2="400" y2="220" stroke="white" stroke-width="4"/>
            <circle cx="200" cy="150" r="40" fill="none" stroke="white" stroke-width="4"/>
            <line x1="200" y1="110" x2="200" y2="190" stroke="white" stroke-width="3"/>
            <line x1="160" y1="150" x2="240" y2="150" stroke="white" stroke-width="3"/>
            
            <!-- Aro de básquet -->
            <g transform="translate(350, 80)">
                <rect x="-5" y="0" width="10" height="40" fill="#FF4500"/>
                <circle cx="0" cy="45" r="20" fill="none" stroke="#FF4500" stroke-width="4"/>
            </g>
            
            <!-- Equipo rojo -->
            <g transform="translate(80, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#8B4513"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 5 Q 0 8 4 5" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#FF0000"/>
                <rect x="-10" y="12" width="20" height="6" fill="#DC143C"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
            </g>
            
            <g transform="translate(120, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#FFD700"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 5 Q 0 8 4 5" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#FF0000"/>
                <rect x="-10" y="12" width="20" height="6" fill="#DC143C"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
            </g>
            
            <g transform="translate(160, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#8B0000"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 5 Q 0 8 4 5" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#FF0000"/>
                <rect x="-10" y="12" width="20" height="6" fill="#DC143C"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
            </g>
            
            <!-- Equipo azul -->
            <g transform="translate(240, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#8B4513"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 5 Q 0 8 4 5" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#0000FF"/>
                <rect x="-10" y="12" width="20" height="6" fill="#1E90FF"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
            </g>
            
            <g transform="translate(280, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#FFD700"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 5 Q 0 8 4 5" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#0000FF"/>
                <rect x="-10" y="12" width="20" height="6" fill="#1E90FF"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
            </g>
            
            <g transform="translate(320, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#8B0000"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 5 Q 0 8 4 5" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#0000FF"/>
                <rect x="-10" y="12" width="20" height="6" fill="#1E90FF"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#1E1E1E"/>
            </g>
            
            <!-- Mateo solo -->
            <g transform="translate(200, 175)">
                <ellipse cx="0" cy="-10" rx="14" ry="8" fill="#FFD700"/>
                <circle cx="0" cy="0" r="12" fill="#FFDAB9"/>
                <circle cx="-4" cy="-2" r="2" fill="white"/>
                <circle cx="-4" cy="-2" r="1" fill="#4A4A4A"/>
                <circle cx="4" cy="-2" r="2" fill="white"/>
                <circle cx="4" cy="-2" r="1" fill="#4A4A4A"/>
                <path d="M -4 6 Q 0 3 4 6" stroke="#4A4A4A" stroke-width="1.5" fill="none"/>
                <ellipse cx="6" cy="2" rx="2" ry="3" fill="#87CEEB"/>
                <rect x="-10" y="12" width="20" height="25" rx="2" fill="#9370DB"/>
                <rect x="-10" y="12" width="20" height="6" fill="#8B008B"/>
                <rect x="-14" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="8" y="14" width="6" height="15" rx="1" fill="#FFDAB9"/>
                <rect x="-8" y="37" width="6" height="15" rx="1" fill="#FF8C00"/>
                <rect x="2" y="37" width="6" height="15" rx="1" fill="#FF8C00"/>
            </g>
            
            <!-- Burbuja -->
            <g transform="translate(200, 90)">
                <ellipse cx="5" cy="5" rx="55" ry="28" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="55" ry="28" fill="white" stroke="#333" stroke-width="3"/>
                <polygon points="30,22 42,48 52,22" fill="white" stroke="#333" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Nadie me elige...</text>
            </g>
        </svg>
    `;
}

function createSVGScene6() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="recessGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#B0E0E6;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de recreo -->
            <rect x="0" y="0" width="400" height="300" fill="url(#recessGradient)"/>
            <rect x="0" y="200" width="400" height="100" fill="#90EE90"/>
            
            <!-- Banco -->
            <g transform="translate(50, 220)">
                <rect x="0" y="0" width="80" height="15" fill="#8B4513"/>
                <rect x="5" y="15" width="5" height="20" fill="#8B4513"/>
                <rect x="70" y="15" width="5" height="20" fill="#8B4513"/>
            </g>
            
            <!-- Sofía confidencial -->
            <g transform="translate(110, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <ellipse cx="0" cy="5" rx="4" ry="2" fill="#4A4A4A"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF69B4"/>
                <rect x="-12" y="16" width="24" height="8" fill="#FF1493"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#9370DB"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#9370DB"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#4B0082"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#4B0082"/>
            </g>
            
            <!-- Valentina contando -->
            <g transform="translate(200, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B0000"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <ellipse cx="0" cy="5" rx="6" ry="4" fill="#4A4A4A"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#32CD32"/>
                <rect x="-12" y="16" width="24" height="8" fill="#228B22"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#FF1493"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#FF1493"/>
            </g>
            
            <!-- Otro chico escuchando -->
            <g transform="translate(290, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF4500"/>
                <rect x="-12" y="16" width="24" height="8" fill="#DC143C"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Burbuja de secreto -->
            <g transform="translate(155, 95)">
                <ellipse cx="5" cy="5" rx="75" ry="38" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="75" ry="38" fill="white" stroke="#333" stroke-width="3"/>
                <polygon points="38,30 52,58 62,30" fill="white" stroke="#333" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">¡Te cuento un secreto! 🤫</text>
            </g>
            
            <!-- Burbuja de traición -->
            <g transform="translate(245, 95)">
                <ellipse cx="5" cy="5" rx="75" ry="38" fill="rgba(255,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="75" ry="38" fill="#FFE4E1" stroke="#FF0000" stroke-width="3"/>
                <polygon points="-38,30 -52,58 -62,30" fill="#FFE4E1" stroke="#FF0000" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#FF0000">¡Se lo conté a todos! 💔</text>
            </g>
        </svg>
    `;
}

function createSVGScene7() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="classroomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFF8DC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de aula -->
            <rect x="0" y="0" width="400" height="300" fill="url(#classroomGradient)"/>
            <rect x="0" y="200" width="400" height="100" fill="#DEB887"/>
            
            <!-- Pizarrón con bienvenida -->
            <rect x="45" y="25" width="310" height="110" fill="#8B4513" rx="5"/>
            <rect x="55" y="35" width="290" height="90" fill="#2F4F4F" rx="3"/>
            <text x="200" y="70" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFD700">¡BIENVENIDO TOMÁS!</text>
            <text x="200" y="95" text-anchor="middle" font-size="14" fill="#87CEEB">Hoy tienes nuevos amigos</text>
            <text x="200" y="115" text-anchor="middle" font-size="12" fill="#90EE90">🌟 👋 🌟</text>
            
            <!-- Tomás nuevo -->
            <g transform="translate(200, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#FFD700"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 5 Q 0 3 5 5" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FFD700"/>
                <rect x="-12" y="16" width="24" height="8" fill="#FFA500"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#32CD32"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#32CD32"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#228B22"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#228B22"/>
            </g>
            
            <!-- Chico mirando -->
            <g transform="translate(100, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#4169E1"/>
                <rect x="-12" y="16" width="24" height="8" fill="#1E90FF"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
            </g>
            
            <!-- Chica mirando -->
            <g transform="translate(300, 175)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B0000"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#FF6347"/>
                <rect x="-12" y="16" width="24" height="8" fill="#DC143C"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#FF1493"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#FF1493"/>
            </g>
            
            <!-- Burbuja de Tomás -->
            <g transform="translate(200, 90)">
                <ellipse cx="5" cy="5" rx="65" ry="35" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="65" ry="35" fill="white" stroke="#333" stroke-width="3"/>
                <polygon points="35,28 48,55 58,28" fill="white" stroke="#333" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">No conozco a nadie... 😕</text>
            </g>
        </svg>
    `;
}

function createSVGScene8() {
    return `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="partyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFB6C1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFC0CB;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Fondo de fiesta -->
            <rect x="0" y="0" width="400" height="300" fill="url(#partyGradient)"/>
            
            <!-- Confeti -->
            <g>
                <rect x="30" y="80" width="8" height="8" fill="#FFD700" transform="rotate(45, 34, 84)"/>
                <rect x="150" y="60" width="6" height="6" fill="#FF6B6B" transform="rotate(30, 153, 63)"/>
                <rect x="280" y="90" width="7" height="7" fill="#4ECDC4" transform="rotate(60, 283, 93)"/>
                <rect x="350" y="70" width="8" height="8" fill="#95E1D3" transform="rotate(15, 354, 74)"/>
                <circle cx="100" cy="100" r="4" fill="#FFE66D"/>
                <circle cx="250" cy="85" r="5" fill="#F38181"/>
                <circle cx="320" cy="110" r="4" fill="#FFD700"/>
            </g>
            
            <!-- Globos con hilos -->
            <g>
                <line x1="50" y1="70" x2="50" y2="120" stroke="#666" stroke-width="1"/>
                <circle cx="50" cy="50" r="20" fill="#FF6B6B" opacity="0.9"/>
                <ellipse cx="45" cy="40" rx="5" ry="8" fill="white" opacity="0.4"/>
                
                <line x1="100" y1="65" x2="100" y2="115" stroke="#666" stroke-width="1"/>
                <circle cx="100" cy="40" r="25" fill="#4ECDC4" opacity="0.9"/>
                <ellipse cx="93" cy="28" rx="6" ry="10" fill="white" opacity="0.4"/>
                
                <line x1="150" y1="75" x2="150" y2="125" stroke="#666" stroke-width="1"/>
                <circle cx="150" cy="55" r="22" fill="#FFE66D" opacity="0.9"/>
                <ellipse cx="142" cy="42" rx="5" ry="9" fill="white" opacity="0.4"/>
                
                <line x1="300" y1="65" x2="300" y2="115" stroke="#666" stroke-width="1"/>
                <circle cx="300" cy="45" r="23" fill="#95E1D3" opacity="0.9"/>
                <ellipse cx="292" cy="32" rx="6" ry="10" fill="white" opacity="0.4"/>
                
                <line x1="350" y1="75" x2="350" y2="125" stroke="#666" stroke-width="1"/>
                <circle cx="350" cy="55" r="20" fill="#F38181" opacity="0.9"/>
                <ellipse cx="343" cy="42" rx="5" ry="8" fill="white" opacity="0.4"/>
            </g>
            
            <!-- Pastel decorado -->
            <g transform="translate(200, 220)">
                <rect x="-35" y="0" width="70" height="60" fill="#FFB6C1"/>
                <rect x="-40" y="-25" width="80" height="30" fill="#DDA0DD"/>
                <rect x="-40" y="-25" width="80" height="5" fill="#DA70D6"/>
                <!-- Velas -->
                <rect x="-8" y="-45" width="4" height="25" fill="#FFD700"/>
                <rect x="4" y="-45" width="4" height="25" fill="#FFD700"/>
                <circle cx="-6" cy="-48" r="5" fill="#FF0000"/>
                <circle cx="6" cy="-48" r="5" fill="#FFD700"/>
                <circle cx="-6" cy="-50" r="3" fill="#FF4500"/>
                <circle cx="6" cy="-50" r="3" fill="#FFA500"/>
                <!-- Decoración -->
                <circle cx="-20" cy="-10" r="8" fill="#FF0000"/>
                <circle cx="20" cy="-10" r="8" fill="#00FF00"/>
                <circle cx="0" cy="-5" r="6" fill="#FFD700"/>
            </g>
            
            <!-- Sofía feliz con gorro -->
            <g transform="translate(200, 130)">
                <!-- Gorro -->
                <polygon points="-15,-28 0,-65 15,-28" fill="#FFD700"/>
                <circle cx="0" cy="-68" r="10" fill="#FFD700"/>
                <circle cx="0" cy="-68" r="6" fill="#FFA500"/>
                <!-- Cabello -->
                <ellipse cx="0" cy="-15" rx="20" ry="14" fill="#8B4513"/>
                <!-- Cabeza -->
                <circle cx="0" cy="0" r="18" fill="#FFDAB9"/>
                <circle cx="-7" cy="-3" r="3" fill="white"/>
                <circle cx="-7" cy="-3" r="1.5" fill="#4A4A4A"/>
                <circle cx="7" cy="-3" r="3" fill="white"/>
                <circle cx="7" cy="-3" r="1.5" fill="#4A4A4A"/>
                <!-- Cara muy feliz -->
                <path d="M -10 10 Q 0 18 10 10" stroke="#4A4A4A" stroke-width="3" fill="none"/>
                <!-- Mejillas sonrojadas -->
                <ellipse cx="-12" cy="5" rx="4" ry="3" fill="#FFB6C1" opacity="0.6"/>
                <ellipse cx="12" cy="5" rx="4" ry="3" fill="#FFB6C1" opacity="0.6"/>
                <rect x="-14" y="18" width="28" height="40" rx="3" fill="#FF69B4"/>
                <rect x="-14" y="18" width="28" height="10" fill="#FF1493"/>
                <rect x="-20" y="20" width="8" height="25" rx="2" fill="#FFDAB9"/>
                <rect x="12" y="20" width="8" height="25" rx="2" fill="#FFDAB9"/>
                <rect x="-12" y="58" width="8" height="20" rx="2" fill="#9370DB"/>
                <rect x="4" y="58" width="8" height="20" rx="2" fill="#9370DB"/>
                <ellipse cx="-8" cy="80" rx="6" ry="4" fill="#4B0082"/>
                <ellipse cx="8" cy="80" rx="6" ry="4" fill="#4B0082"/>
            </g>
            
            <!-- Compañero celebrando -->
            <g transform="translate(80, 150)">
                <ellipse cx="0" cy="-12" rx="18" ry="10" fill="#8B4513"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#4169E1"/>
                <rect x="-12" y="16" width="24" height="8" fill="#1E90FF"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#2F4F4F"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#1E1E1E"/>
                <!-- Brazos arriba celebrando -->
                <rect x="-22" y="10" width="8" height="25" rx="2" fill="#FFDAB9" transform="rotate(-30, -18, 22)"/>
                <rect x="14" y="10" width="8" height="25" rx="2" fill="#FFDAB9" transform="rotate(30, 18, 22)"/>
            </g>
            
            <!-- Compañera celebrando -->
            <g transform="translate(320, 150)">
                <ellipse cx="0" cy="-12" rx="18" ry="12" fill="#8B0000"/>
                <circle cx="0" cy="0" r="16" fill="#FFDAB9"/>
                <circle cx="-6" cy="-2" r="3" fill="white"/>
                <circle cx="-6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <circle cx="6" cy="-2" r="3" fill="white"/>
                <circle cx="6" cy="-2" r="1.5" fill="#4A4A4A"/>
                <path d="M -5 7 Q 0 11 5 7" stroke="#4A4A4A" stroke-width="2" fill="none"/>
                <rect x="-12" y="16" width="24" height="32" rx="3" fill="#32CD32"/>
                <rect x="-12" y="16" width="24" height="8" fill="#228B22"/>
                <rect x="-18" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="10" y="18" width="8" height="20" rx="2" fill="#FFDAB9"/>
                <rect x="-10" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <rect x="2" y="48" width="8" height="20" rx="2" fill="#FF69B4"/>
                <ellipse cx="-6" cy="70" rx="6" ry="4" fill="#FF1493"/>
                <ellipse cx="6" cy="70" rx="6" ry="4" fill="#FF1493"/>
                <!-- Brazos arriba celebrando -->
                <rect x="-22" y="10" width="8" height="25" rx="2" fill="#FFDAB9" transform="rotate(-30, -18, 22)"/>
                <rect x="14" y="10" width="8" height="25" rx="2" fill="#FFDAB9" transform="rotate(30, 18, 22)"/>
            </g>
            
            <!-- Burbuja -->
            <g transform="translate(200, 50)">
                <ellipse cx="5" cy="5" rx="85" ry="40" fill="rgba(0,0,0,0.1)"/>
                <ellipse cx="0" cy="0" rx="85" ry="40" fill="white" stroke="#333" stroke-width="3"/>
                <polygon points="45,32 60,60 70,32" fill="white" stroke="#333" stroke-width="3"/>
                <text x="0" y="5" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">¿A quién invito a mi fiesta? 🎂</text>
            </g>
        </svg>
    `;
}

// Funciones de navegación
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funciones del prototipo
function showPrototype() {
    document.getElementById('prototype-container').classList.remove('hidden');
    document.getElementById('landing-page').classList.add('hidden');
    document.body.style.overflow = 'hidden';
    openPrototype('docente');
}

function closePrototype() {
    document.getElementById('prototype-container').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    document.body.style.overflow = 'auto';

    document.querySelectorAll('.prototype-view').forEach(view => {
        view.classList.remove('active');
        view.classList.add('hidden');
    });
}

function openPrototype(viewName) {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('prototype-container').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    document.querySelectorAll('.prototype-view').forEach(view => {
        view.classList.remove('active');
        view.classList.add('hidden');
    });

    const viewMap = {
        'docente': 'vista-docente',
        'directivo': 'vista-directivo',
        'familias': 'vista-familias'
    };

    const selectedView = document.getElementById(viewMap[viewName]);
    if (selectedView) {
        selectedView.classList.remove('hidden');
        selectedView.classList.add('active');
    }

    if (viewName === 'docente') {
        loadEpisode(currentEpisode);
    }
}

// Cargar episodio
function loadEpisode(episodeNumber) {
    const episode = episodes.find(e => e.id === episodeNumber);
    if (!episode) return;

    currentEpisode = episodeNumber;

    // Actualizar UI
    document.getElementById('scene-episode-number').textContent = `Episodio ${episodeNumber}`;
    document.getElementById('current-episode-label').textContent = `Episodio ${episodeNumber} de ${episodes.length}`;
    document.getElementById('progress-percentage').textContent = `${Math.round((episodeNumber / episodes.length) * 100)}%`;
    document.getElementById('episode-progress').style.width = `${(episodeNumber / episodes.length) * 100}%`;
    document.getElementById('scene-title').textContent = episode.title;
    document.getElementById('scene-text').innerHTML = `<strong>Situación:</strong> ${episode.situation}`;
    document.getElementById('scene-illustration').innerHTML = episode.svg;

    // Actualizar selector de episodios
    document.querySelectorAll('.episode-item').forEach((item, index) => {
        const epNum = index + 1;
        item.classList.remove('active');

        if (epNum === episodeNumber) {
            item.classList.add('active');
        }

        if (epNum > completedEpisodes.length) {
            item.classList.add('locked');
            item.querySelector('.episode-number').textContent = '🔒';
        } else {
            item.classList.remove('locked');
            item.querySelector('.episode-number').textContent = epNum;
        }
    });

    // Cargar botones de decisión
    const decisionButtons = document.getElementById('decision-buttons');
    decisionButtons.innerHTML = episode.decisions.map(decision => `
        <button class="decision-btn" onclick="makeDecision('${decision.id}')">
            <span class="btn-icon">${decision.icon}</span>
            <span class="btn-text">${decision.text}</span>
        </button>
    `).join('');

    // Resetear resultado
    resetDecision();
}

function selectEpisode(episodeNumber) {
    if (episodeNumber > completedEpisodes.length) {
        alert('¡Primero completa los episodios anteriores para desbloquear este!');
        return;
    }
    loadEpisode(episodeNumber);
}

function makeDecision(decisionId) {
    const episode = episodes.find(e => e.id === currentEpisode);
    if (!episode) return;

    const decision = episode.decisions.find(d => d.id === decisionId);
    if (!decision) return;

    lastDecision = decision;

    // Mostrar resultado
    const resultPanel = document.getElementById('decision-result');
    const decisionPanel = document.getElementById('decision-panel');

    decisionPanel.querySelector('.decision-buttons').classList.add('hidden');
    resultPanel.classList.remove('hidden');

    document.getElementById('result-title').textContent = decision.isGood ? '¡Excelente decisión!' : 'Reflexionemos sobre esto';
    document.getElementById('result-text').innerHTML = decision.result;

    // Cargar preguntas de reflexión
    const reflectionList = document.getElementById('reflection-list');
    reflectionList.innerHTML = decision.reflection.map(q => `<li>${q}</li>`).join('');

    // Cambiar color según si fue buena decisión
    if (decision.isGood) {
        resultPanel.style.background = 'linear-gradient(135deg, #6BCB77, #8ed99a)';
        document.getElementById('next-episode-btn').style.display = 'inline-block';
    } else {
        resultPanel.style.background = 'linear-gradient(135deg, #FF6B6B, #FF9E9E)';
        document.getElementById('next-episode-btn').style.display = 'none';
    }
}

function resetDecision() {
    const resultPanel = document.getElementById('decision-result');
    const decisionPanel = document.getElementById('decision-panel');

    decisionPanel.querySelector('.decision-buttons').classList.remove('hidden');
    resultPanel.classList.add('hidden');
    document.getElementById('next-episode-btn').style.display = 'none';
}

function nextEpisode() {
    if (currentEpisode < episodes.length) {
        // Marcar episodio actual como completado
        if (!completedEpisodes.includes(currentEpisode)) {
            completedEpisodes.push(currentEpisode);
        }

        // Avanzar al siguiente
        loadEpisode(currentEpisode + 1);
    } else {
        alert('¡Felicitaciones! Has completado todos los episodios de Aula Amiga.');
    }
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const colegio = document.getElementById('colegio').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && colegio && email) {
        alert('¡Gracias por tu interés en Aula Amiga! Nos pondremos en contacto contigo pronto.');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos requeridos.');
    }
});

// Animación de entrada para las secciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .value-card, .step, .prototype-card, .course-card, .ficha-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Efecto hover en navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Inicializar
loadEpisode(1);

console.log('Aula Amiga - Sitio web cargado correctamente');
