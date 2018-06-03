import { observable, computed, action } from 'mobx';
import { Api } from './Api';
import { DataItem } from './DataItem';
import { Type } from './Type';

export class DataItemStore {
  
  @observable items: DataItem[] = [];
  @observable types: Type[] = [];
  @observable typeFilters: string[] = [];
  @observable selectedItem: DataItem | null = null;
  @observable pendingRequests = 0;

  @computed get displayTypes(): Type[] {
    if (!this.typeFilters || this.typeFilters.length === 0) {
      return this.types;
    }
    return this.types.filter(type => this.typeFilters.indexOf(type.title) > -1);
  }

  @computed get displayItems(): DataItem[] {
    if (!this.typeFilters || this.typeFilters.length === 0) {
      return this.items;
    }
    const types = this.displayTypes.map(type => type.id);
    return this.items.filter(item => types.indexOf(item.group) > -1);
  }

  private api = new Api();

  constructor() {
    this.load();
  }
  
  @action async load() {
    const results = await this.api.load();
    this.types = results.types;
    this.items = results.items;
  }

  @action selectItem(id: number) {
    this.selectedItem = this.items.find(item => item.id === id) || null;
  }

  @action unselectItem(id: number) {
    this.selectedItem = null;
  }

  @action addTypeFilter(filter: string) {
    this.typeFilters.push(filter);
  }

  @action removeTypeFilter(filter: string) {
    this.typeFilters.splice(this.typeFilters.indexOf(filter), 1);
  }

  @action resetTypeFilters() {
    this.typeFilters = [];
  }
}