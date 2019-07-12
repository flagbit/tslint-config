/**
 * ExampleComponent
 * ================
 *
 * This component is used to demostrate how our code should look like.
 */
export class ExampleComponent {
  /**
   * We are storing something inside this property
   */
  private _something = false;

  /**
   * The description of this method
   * @param param The parameter that is getting passed
   */
  public someMethod(param: number): boolean {
    if (param) {
      return true;
    }

    return this._something;
  }
}
