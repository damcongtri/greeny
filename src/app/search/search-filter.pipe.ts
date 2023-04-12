import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(listSearch: any, keyword: any) {
    if (keyword == '') {
      return []
    }
    keyword = keyword.toLowerCase()
    return listSearch.filter((data: any) => {
      return data.name.toLowerCase().includes(keyword)
    })
  }

}
