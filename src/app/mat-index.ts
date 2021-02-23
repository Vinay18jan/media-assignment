import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';



const matDeclaration = [
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    // MatTableModule,
    // MatDividerModule,
    // MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    // MatSlideToggleModule,
    // MatSelectModule,
    // MatOptionModule
]

@NgModule({
    imports: [
        ...matDeclaration
    ],
    exports: [...matDeclaration]
})

export class MaterialModule { }

