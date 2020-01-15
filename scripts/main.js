import { EntryListComponent } from './Journal/JournalEntryList.js'
import { getJournal } from './Journal/JournalDataProvider.js'
import { JournalFormComponent} from "./Journal/JournalForm.js"
import {FilterBar} from './filter/FilterBar.js'



getJournal()
.then(JournalFormComponent)
.then(EntryListComponent)
.then(FilterBar)


