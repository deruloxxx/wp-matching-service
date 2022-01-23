export class OrderUsecase {
  requestOrder() {
    if (this.clientChooseCourseAndEngineer()) {
      return;
    } else {
      throw new Error('エラー');
    }
  }

  private clientChooseCourseAndEngineer() {
    return false;
  }
}
