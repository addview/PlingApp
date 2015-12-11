var app = angular.module('app.services', []);

app.factory('Userinformations', function() {    
    // Some fake testing data
    var emptyObjectUser = {
        username: '',
        password: '',
        fullname: '',
        phone: '',
        email: '',
        address: '',
        apartmentnumber: ''
    };
    var users = [{
        id: 1,
        username: 'Fredrik',
        password: 'password',
        fullname: 'Fredrik Persson',
        phone: '0725850038',
        email: 'fredrik.persson@xlent.se',
        address: 'Götgatan 1',
        apartmentnumber: 'AP-12367'
        },
        {
        id: 2,
        username: 'Mikael',
        password: 'password',
        fullname: 'Mikael Eriksson',
        phone: '0725850031',
        email: 'mikael.eriksson@xlent.se',
        address: 'Götgatan 1',
        apartmentnumber: 'AP-12456'
        }
    ];

    return {
        all: function() {
            return users;
        },
        remove: function(user) {
            users.splice(users.indexOf(user), 1);
        },
        get: function(userId) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === parseInt(userId)) {
                    return users[i];
                }
            }
            return null;
        },
        emptyobject: function(){
            return  emptyObjectUser;
        }
    };
});

app.factory('Notifications', function() {    
    // Some fake testing data
    var notifications = [{
            id: 0,
            date: '2016-01-12',
            type: 'ion-information-circled balanced',
            title: 'Inför renovering av badrum',
            message: 'Inför renovering av badrum skall skiss inkomma styrelsen för godkännande tillsammans med intyg från behörig firma som utför el-, vvs- och tätskiktsarbeten innan arbetet påbörjas, för att undvika tex vattenläckor eller att något annat problem som du blir ansvarig för uppstår på grund av att du inte har all information om vart rör och stammar går, hur man får och inte får bygga in rör i väggen etc. För att ett badrum skall räknas som renoverat vid framtida stambyte, skall samtliga rör bytas till stående stam i köksvägg.',
            furtherinformation: {
                responsible: 'Fredrik Persson',
                supplier: {
                    name: 'Stoby Måleri',
                    contact: 'Lars Nilsson',
                    phone: '0451-123456',
                    email: 'lars.nilsson@stobymaleri.se'
                },
            }
        }, {
            id: 1,
            date: '2016-01-20',
            type: 'ion-information-circled balanced',
            title: 'Ytterligare information renovering badrum ',
            message: 'Alla som gör om i lägenheterna måste lämna garantier för att den entreprenör som anlitas uppfyller följande punkter: är försäkrade hos BRIM eller motsvarande, är brandskyddsutbildade ”Heta arbeten”, innehar kvalitets- och miljöplan som följer ISO, är kreditvärdiga, kan visa registreringsbevis/aktiebolag, innehar F-skattebevis, BF9K-produktcertifiering eller motsvarande, är certifierade enligt ”Säkert Vatten” så att våra försäkringar skall gälla. ',
            furtherinformation: {
                responsible: 'Fredrik Persson',
                supplier: {
                    name: 'Stoby Måleri',
                    contact: 'Lars Nilsson',
                    phone: '0451-123456',
                    email: 'lars.nilsson@stobymaleri.se'
                },
            }
        }, {
            id: 2,
            date: '2016-01-20',
            type: 'ion-alert-circled assertive',
            title: 'Störande ljud',
            message: 'Störande arbete, såsom bilning, rivning, golvslipning, borrning och annat arbete som medför störande ljud förläggs till 08-17 vardagar. Viktigt att detta efterföljs, då det ibland är många renoveringar efter varandra.',
            furtherinformation: {
                responsible: 'Fredrik Persson',
                supplier: {
                    name: 'Stoby Måleri',
                    contact: 'Lars Nilsson',
                    phone: '0451-123456',
                    email: 'lars.nilsson@stobymaleri.se'
                },
            }
        }, {
            id: 3,
            date: '2016-01-20',
            type: 'ion-information-circled balanced',
            title: 'Rivning av väggar',
            message: 'Inför rivning av väggar skall skiss inkomma till styrelsen för godkännande (bärande väggar får aldrig rivas) innan arbetet påbörjas. Vid rivning av vägg mellan kök och vardagsrum behöver ni till exempel information om var rören går. Dessutom är vissa väggar bärande och får ej rivas utan bygglov (tex den lilla väggen mellan hall och kök/vardagsrum i 3:orna i 11:an). Avvikelser kan förekomma så det är viktigt att kontakta styrelsen i god tid för att se över ritningarna. '
        }, {
            id: 4,
            date: '2016-01-20',
            type: 'ion-alert-circled assertive',
            title: 'Vattenavstängning',
            message: 'För vattenavstängning kontaktas fastighetsskötare och avisering i entrén och i hissen i berört hus görs i god tid med information om datum och tid för avstängningen.',
            furtherinformation: {
                responsible: 'Fredrik Persson',
                supplier: {
                    name: 'Stoby Måleri',
                    contact: 'Lars Nilsson',
                    phone: '0451-123456',
                    email: 'lars.nilsson@stobymaleri.se'
                },
            }
        }, {
            id: 5,
            date: '2016-01-20',
            type: 'ion-information-circled balanced',
            title: 'Radiatorer',
            message: 'Radiatorer får ej bytas eller tas bort. ',
            furtherinformation: {
                responsible: 'Fredrik Persson',
                supplier: {
                    name: 'Stoby Måleri',
                    contact: 'Lars Nilsson',
                    phone: '0451-123456',
                    email: 'lars.nilsson@stobymaleri.se'
                },
            }
        }, {
            id: 6,
            date: '2016-01-20',
            type: 'ion-alert-circled assertive',
            title: 'Ventilation',
            message: 'Ventilation för INTE byggas eller täckas för.',
            furtherinformation: {
                responsible: 'Fredrik Persson',
                supplier: {
                    name: 'Stoby Måleri',
                    contact: 'Lars Nilsson',
                    phone: '0451-123456',
                    email: 'lars.nilsson@stobymaleri.se'
                },
            }
        }

    ];

    return {
        all: function() {
            return notifications;
        },
        remove: function(notification) {
            notifications.splice(notifications.indexOf(notification), 1);
        },
        get: function(notificationId) {
            for (var i = 0; i < notifications.length; i++) {
                if (notifications[i].id === parseInt(notificationId)) {
                    return notifications[i];
                }
            }
            return null;
        }
    };
});
