import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppConfig } from './environments/environment';

if (AppConfig.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    preserveWhitespaces: false
  })
  .catch(err => console.error(err));

/*const app: express.Application = express();
app.get('/', (req, res) => {
  console.log(req, res);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});*/