var fs = parent.require('fs');
var path = parent.require('path');

var win = parent.require('electron').remote.BrowserWindow;

function popWindow() {
    var popup = new win({width: 600, height: 400});
    popup.loadFile('./app/html/addShow.html');
}

function addNewShow() {
    var inputText = document.getElementById('showName').value;
    var showPath = path.join('./app/shows', inputText);
    var emptyShowPath = path.join('./app/config/emptyShow.json');

    if (fs.existsSync(showPath)) {
        alert('Yo, show ' + inputText + ' already exists')
    } else {
        fs.mkdirSync(showPath);
        alert("New show " + inputText + " added");
        fs.copyFileSync(emptyShowPath, path.join(showPath, 'show.json'));


        var appConfigPath = path.join(parent.__dirname, './config/shows.json');
        var appConfig = JSON.parse(fs.readFileSync(appConfigPath));

        var activeShow = appConfig.activeShow;
        var shows = appConfig.shows;

        addShowToConfig(appConfigPath);
    } 

    closePopupWindow();
}

function closePopupWindow() {
    parent.require('electron').remote.getCurrentWindow().close();
}

function addShowToConfig(jsonPath) {
    var data = JSON.parse(fs.readFileSync(jsonFiles[i]));

    if (data) {
        var experiences = data.experiences;
            for (z in experiences) {
                if (typeof experiences[z].thingCode !== 'undefined') {
                    experiences[z].thingCode = newData;
                } else if (typeof experiences[z].vumark !== 'undefined') {
                    experiences[z].vumark = newData;
                }
                if (typeof experiences[z]['index-keys'] !== 'undefined' && experiences[z]['index-keys'] !== []) {
                    experiences[z]['index-keys'] = ['urn:vuforia:vumark:' + newData];
                }
            }
            fs.writeFileSync(jsonFiles[i], JSON.stringify(data, null, 2));
        }
    }
}
